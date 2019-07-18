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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ProjectDefinition } from '../model/projectDefinition';
import { RateLimitError } from '../model/rateLimitError';
import { RunTestDefinition } from '../model/runTestDefinition';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RuntimeService {

    protected basePath = '/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Runs a test
     * Runs a test of the Account according to the method parameters.
     * @param name The name of the test
     * @param projectId The project Id of the test
     * @param scenarioName The scenario name of the test
     * @param description The description of the test
     * @param asCode The comma-separated as-code files to use for the test. Those files must be part of the uploaded project.
     * @param reservationId The reservation identifier to use for the test that can be retrieved from the NeoLoad Web reservation calendar URL. If the reservation mode is enabled and \&quot;reservationId\&quot; value is defined, \&quot;reservationDuration\&quot;, \&quot;reservationWebVUs\&quot; and \&quot;reservationSAPVUs\&quot; values will be ignored, otherwise if the reservation mode is disabled the value will be ignored.
     * @param reservationDuration The duration of the reservation for the test. If the reservation mode is enabled, this value or \&quot;reservationDuration\&quot;, \&quot;reservationWebVUs\&quot;, \&quot;reservationSAPVUs\&quot; must be defined, otherwise if the reservation mode is disabled the value will be ignored. The value (in seconds) is optional when the reservation mode is enabled and ignored when reservationId value is defined or if the reservation mode is disabled. The default value is the selected scenario duration + 1200 seconds (20 minutes). All reserved resources will be released when the test ends.
     * @param reservationWebVUs The number of Web Virtual Users to be reserved for the test. The value is optional when the reservation mode is enabled and ignored when \&quot;reservationId\&quot; value is defined or if the reservation mode is disabled.
     * @param reservationSAPVUs The number of SAP Virtual Users to be reserved for the test. The value is optional when the reservation mode is enabled and ignored when \&quot;reservationId\&quot; value is defined or if the reservation mode is disabled.
     * @param controllerZoneId The controller zone Id. If empty, the default zone will be used.
     * @param lgZones The LG zones with the number of the LGs. Example: \&quot;ZoneId1:10,ZoneId2:5\&quot;. If empty, the default zone will be used with one LG.
     * @param publishTestResult When \&quot;true\&quot; and the project is an collaborative project (other than git) then the test result is published onto the server. If empty, the default value is \&quot;false\&quot;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTestsRun(name: string, projectId: string, scenarioName: string, description?: string, asCode?: string, reservationId?: string, reservationDuration?: number, reservationWebVUs?: number, reservationSAPVUs?: number, controllerZoneId?: string, lgZones?: string, publishTestResult?: boolean, observe?: 'body', reportProgress?: boolean): Observable<RunTestDefinition>;
    public getTestsRun(name: string, projectId: string, scenarioName: string, description?: string, asCode?: string, reservationId?: string, reservationDuration?: number, reservationWebVUs?: number, reservationSAPVUs?: number, controllerZoneId?: string, lgZones?: string, publishTestResult?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RunTestDefinition>>;
    public getTestsRun(name: string, projectId: string, scenarioName: string, description?: string, asCode?: string, reservationId?: string, reservationDuration?: number, reservationWebVUs?: number, reservationSAPVUs?: number, controllerZoneId?: string, lgZones?: string, publishTestResult?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RunTestDefinition>>;
    public getTestsRun(name: string, projectId: string, scenarioName: string, description?: string, asCode?: string, reservationId?: string, reservationDuration?: number, reservationWebVUs?: number, reservationSAPVUs?: number, controllerZoneId?: string, lgZones?: string, publishTestResult?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getTestsRun.');
        }

        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling getTestsRun.');
        }

        if (scenarioName === null || scenarioName === undefined) {
            throw new Error('Required parameter scenarioName was null or undefined when calling getTestsRun.');
        }










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (description !== undefined && description !== null) {
            queryParameters = queryParameters.set('description', <any>description);
        }
        if (asCode !== undefined && asCode !== null) {
            queryParameters = queryParameters.set('asCode', <any>asCode);
        }
        if (scenarioName !== undefined && scenarioName !== null) {
            queryParameters = queryParameters.set('scenarioName', <any>scenarioName);
        }
        if (reservationId !== undefined && reservationId !== null) {
            queryParameters = queryParameters.set('reservationId', <any>reservationId);
        }
        if (reservationDuration !== undefined && reservationDuration !== null) {
            queryParameters = queryParameters.set('reservationDuration', <any>reservationDuration);
        }
        if (reservationWebVUs !== undefined && reservationWebVUs !== null) {
            queryParameters = queryParameters.set('reservationWebVUs', <any>reservationWebVUs);
        }
        if (reservationSAPVUs !== undefined && reservationSAPVUs !== null) {
            queryParameters = queryParameters.set('reservationSAPVUs', <any>reservationSAPVUs);
        }
        if (controllerZoneId !== undefined && controllerZoneId !== null) {
            queryParameters = queryParameters.set('controllerZoneId', <any>controllerZoneId);
        }
        if (lgZones !== undefined && lgZones !== null) {
            queryParameters = queryParameters.set('lgZones', <any>lgZones);
        }
        if (publishTestResult !== undefined && publishTestResult !== null) {
            queryParameters = queryParameters.set('publishTestResult', <any>publishTestResult);
        }

        let headers = this.defaultHeaders;

        // authentication (NeoloadAuthorizer) required
        if (this.configuration.apiKeys["accountToken"]) {
            headers = headers.set('accountToken', this.configuration.apiKeys["accountToken"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<RunTestDefinition>(`${this.basePath}/projects/${encodeURIComponent(String(projectId))}/run`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

   /**
     * Uploads a NeoLoad project zip file or a standalone as code file
     * Uploads a NeoLoad project of the account corresponding to the parameters. The maximum size file is ${FILE_PROJECT_MAX_SIZE_IN_BYTES}
     * @param file 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    /*
    public postUploadProject(file: Blob, observe?: 'body', reportProgress?: boolean): Observable<ProjectDefinition>;
    public postUploadProject(file: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ProjectDefinition>>;
    public postUploadProject(file: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ProjectDefinition>>;
    public postUploadProject(file: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling postUploadProject.');
        }

        let headers = this.defaultHeaders;

        // authentication (NeoloadAuthorizer) required
        if (this.configuration.apiKeys["accountToken"]) {
            headers = headers.set('accountToken', this.configuration.apiKeys["accountToken"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<ProjectDefinition>(`${this.basePath}/projects`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }*/

}