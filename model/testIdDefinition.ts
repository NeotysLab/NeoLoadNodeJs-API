/**
 * NeoLoad API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { ElementIdDefinition } from './elementIdDefinition';


/**
 * The map of test ids with their own statistics and counters definition.
 */
export interface TestIdDefinition { 
    /**
     * The list of elements.
     */
    elementIds?: Array<ElementIdDefinition>;
    /**
     * The list of counters.
     */
    counterIds?: Array<string>;
}