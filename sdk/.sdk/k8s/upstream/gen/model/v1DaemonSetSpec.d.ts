/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1DaemonSetUpdateStrategy } from './v1DaemonSetUpdateStrategy';
import { V1LabelSelector } from './v1LabelSelector';
import { V1PodTemplateSpec } from './v1PodTemplateSpec';
/**
* DaemonSetSpec is the specification of a daemon set.
*/
export declare class V1DaemonSetSpec {
    /**
    * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
    */
    'minReadySeconds'?: number;
    /**
    * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
    */
    'revisionHistoryLimit'?: number;
    'selector': V1LabelSelector;
    'template': V1PodTemplateSpec;
    'updateStrategy'?: V1DaemonSetUpdateStrategy;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
