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

export interface ElementValues { 
    count?: number;
    elementPerSecond?: number;
    minDuration?: number;
    maxDuration?: number;
    sumDuration?: number;
    avgDuration?: number;
    minTTFB?: number;
    maxTTFB?: number;
    sumTTFB?: number;
    avgTTFB?: number;
    sumDownloadedBytes?: number;
    downloadedBytesPerSecond?: number;
    successCount?: number;
    successPerSecond?: number;
    successRate?: number;
    failureCount?: number;
    failurePerSecond?: number;
    failureRate?: number;
}