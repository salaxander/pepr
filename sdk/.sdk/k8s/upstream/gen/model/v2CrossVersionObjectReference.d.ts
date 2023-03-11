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
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
*/
export declare class V2CrossVersionObjectReference {
    /**
    * API version of the referent
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds\"
    */
    'kind': string;
    /**
    * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
    */
    'name': string;
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
