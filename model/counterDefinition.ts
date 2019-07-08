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
 */

export interface CounterDefinition { 
    /**
     * Unique identifier of the counter.
     */
    id?: string;
    /**
     * Name of the counter.
     */
    name?: string;
    /**
     * Full path of the counter including the counter itself.
     */
    path?: Array<string>;
}