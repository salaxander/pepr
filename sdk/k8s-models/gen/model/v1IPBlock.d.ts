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
* IPBlock describes a particular CIDR (Ex. \"192.168.1.1/24\",\"2001:db9::/64\") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.
*/
export declare class IPBlock {
    /**
    * CIDR is a string representing the IP Block Valid examples are \"192.168.1.1/24\" or \"2001:db9::/64\"
    */
    'cidr': string;
    /**
    * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are \"192.168.1.1/24\" or \"2001:db9::/64\" Except values will be rejected if they are outside the CIDR range
    */
    'except'?: Array<string>;
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