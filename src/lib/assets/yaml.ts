// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2023-Present The Pepr Authors

import { dumpYaml } from "@kubernetes/client-node";
import crypto from "crypto";
import { promises as fs } from "fs";

import { Assets } from ".";
import { apiTokenSecret, service, tlsSecret } from "./networking";
import { deployment, moduleSecret, namespace } from "./pods";
import { clusterRole, clusterRoleBinding, serviceAccount } from "./rbac";
import { webhookConfig } from "./webhooks";

export function zarfYaml({ name, image, config }: Assets, path: string) {
  const zarfCfg = {
    kind: "ZarfPackageConfig",
    metadata: {
      name,
      description: `Pepr Module: ${config.description}`,
      url: "https://github.com/defenseunicorns/pepr",
      version: `${config.appVersion || "0.0.1"}`,
    },
    components: [
      {
        name: "module",
        required: true,
        manifests: [
          {
            name: "module",
            namespace: "pepr-system",
            files: [path],
          },
        ],
        images: [image],
      },
    ],
  };

  return dumpYaml(zarfCfg, { noRefs: true });
}

export async function allYaml(assets: Assets) {
  const { name, tls, apiToken, path } = assets;

  const code = await fs.readFile(path);

  // Generate a hash of the code
  const hash = crypto.createHash("sha256").update(code).digest("hex");

  const mutateWebhook = await webhookConfig(assets, "mutate");
  const validateWebhook = await webhookConfig(assets, "validate");

  const resources = [
    namespace,
    clusterRole(name),
    clusterRoleBinding(name),
    serviceAccount(name),
    apiTokenSecret(name, apiToken),
    tlsSecret(name, tls),
    deployment(assets, hash),
    service(name),
    moduleSecret(name, code, hash),
  ];

  if (mutateWebhook) {
    resources.push(mutateWebhook);
  }

  if (validateWebhook) {
    resources.push(validateWebhook);
  }

  // Convert the resources to a single YAML string
  return resources.map(r => dumpYaml(r, { noRefs: true })).join("---\n");
}