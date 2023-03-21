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
import { ExecAction } from './v1ExecAction';
import { HTTPGetAction } from './v1HTTPGetAction';
import { TCPSocketAction } from './v1TCPSocketAction';
/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
export declare class LifecycleHandler {
    'exec'?: ExecAction;
    'httpGet'?: HTTPGetAction;
    'tcpSocket'?: TCPSocketAction;
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