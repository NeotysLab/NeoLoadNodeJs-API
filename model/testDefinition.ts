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

export interface TestDefinition { 
    /**
     * Unique identifier of the test.
     */
    id?: string;
    /**
     * Name of the test.
     */
    name?: string;
    /**
     * Description of the test.
     */
    description?: string;
    /**
     * First and Last name of the person who launched the test.
     */
    author?: string;
    /**
     * Reason that caused the test to end.
     */
    terminationReason?: TestDefinition.TerminationReasonEnum;
    /**
     * Total number of Load Generators used in the test.
     */
    lgCount?: number;
    /**
     * Name of the project.
     */
    project?: string;
    /**
     * Name of the scenario.
     */
    scenario?: string;
    /**
     * Status of the test.
     */
    status?: TestDefinition.StatusEnum;
    /**
     * Quality status of the test.
     */
    qualityStatus?: TestDefinition.QualityStatusEnum;
    /**
     * Timestamp when the test started.
     */
    startDate?: number;
    /**
     * Timestamp when the test ended.
     */
    endDate?: number;
    /**
     * Test duration in seconds.
     */
    duration?: number;
}
export namespace TestDefinition {
    export type TerminationReasonEnum = 'POLICY' | 'VARIABLE' | 'MANUAL' | 'LG_AVAILABILITY' | 'LICENSE' | 'UNKNOWN';
    export const TerminationReasonEnum = {
        POLICY: 'POLICY' as TerminationReasonEnum,
        VARIABLE: 'VARIABLE' as TerminationReasonEnum,
        MANUAL: 'MANUAL' as TerminationReasonEnum,
        LGAVAILABILITY: 'LG_AVAILABILITY' as TerminationReasonEnum,
        LICENSE: 'LICENSE' as TerminationReasonEnum,
        UNKNOWN: 'UNKNOWN' as TerminationReasonEnum
    };
    export type StatusEnum = 'INIT' | 'STARTING' | 'RUNNING' | 'TERMINATED' | 'UNKNOWN';
    export const StatusEnum = {
        INIT: 'INIT' as StatusEnum,
        STARTING: 'STARTING' as StatusEnum,
        RUNNING: 'RUNNING' as StatusEnum,
        TERMINATED: 'TERMINATED' as StatusEnum,
        UNKNOWN: 'UNKNOWN' as StatusEnum
    };
    export type QualityStatusEnum = 'PASSED' | 'FAILED' | 'COMPUTING' | 'UNKNOWN';
    export const QualityStatusEnum = {
        PASSED: 'PASSED' as QualityStatusEnum,
        FAILED: 'FAILED' as QualityStatusEnum,
        COMPUTING: 'COMPUTING' as QualityStatusEnum,
        UNKNOWN: 'UNKNOWN' as QualityStatusEnum
    };
}