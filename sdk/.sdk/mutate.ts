// SPDX-License-Identifier: Apache-2.0
// SPDX-FileCopyrightText: 2023-Present The Pepr Authors

import { V1Pod } from "@models";

const thing = new V1Pod();

thing.metadata.name = "hello";

export function mutate(name: string, options: any) {}
