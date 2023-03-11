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
import { V1RollingUpdateDaemonSet } from './v1RollingUpdateDaemonSet';
/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
export declare class V1DaemonSetUpdateStrategy {
    'rollingUpdate'?: V1RollingUpdateDaemonSet;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
    */
    'type'?: string;
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
