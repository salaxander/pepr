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
import { PersistentVolumeClaimCondition } from './v1PersistentVolumeClaimCondition';
/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
*/
export declare class PersistentVolumeClaimStatus {
    /**
    * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    /**
    * allocatedResources is the storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'allocatedResources'?: {
        [key: string]: string;
    };
    /**
    * capacity represents the actual resources of the underlying volume.
    */
    'capacity'?: {
        [key: string]: string;
    };
    /**
    * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to \'ResizeStarted\'.
    */
    'conditions'?: Array<PersistentVolumeClaimCondition>;
    /**
    * phase represents the current phase of PersistentVolumeClaim.
    */
    'phase'?: string;
    /**
    * resizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'resizeStatus'?: string;
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