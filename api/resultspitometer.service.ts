import {ResultsService} from "./results.service";
import {BASE_PATH} from "../variables";
import {Configuration} from "../configuration";
import {TestDefinition} from "../model/testDefinition";
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent }     from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';
import { Observable }                                        from 'rxjs/Observable';
import {ElementDefinition} from "../model/elementDefinition";
import {ArrayOfElementDefinition} from "../model/arrayOfElementDefinition";
import {Points} from "../model/points";
import {Sla} from "../model/sla";
import {ElementValues} from "../model/elementValues";
import {EventType} from "../model/eventType";
import {ArrayOfEventDefinition} from "../model/arrayOfEventDefinition";
import {CounterDefinition} from "../model/counterDefinition";
import {ArrayOfSLAGlobalIndicatorDefinition} from "../model/arrayOfSLAGlobalIndicatorDefinition";
import {ArrayOfSLAPerIntervalDefinition} from "../model/arrayOfSLAPerIntervalDefinition";
import {ArrayOfSLAPerTestDefinition} from "../model/arrayOfSLAPerTestDefinition";
import {ArrayOfTestDefinition} from "../model/arrayOfTestDefinition";

export class Resultpitometer extends ResultsService {
    private testid: string;

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, testid: string) {
        super(httpClient, basePath, configuration);
        this.testid = testid;
    }

    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfSLAPerTestDefinition>;
    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfSLAPerTestDefinition>>;
    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfSLAPerTestDefinition>>;
    public function getTestSLAPerTest( status?: string, category?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return  getTestSLAPerTest(this.testid, status, category, observe, reportProgress);
    }

    public function getTest(observe?: 'body', reportProgress?: boolean): Observable<TestDefinition>;
    public function getTest(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TestDefinition>>;
    public function getTest(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TestDefinition>>;
    public function getTest(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTest(this.testid, observe, reportProgress);
    }

    public function getTestElementDefinition(elementId: string, observe?: 'body', reportProgress?: boolean): Observable<ElementDefinition>;
    public function getTestElementDefinition(elementId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ElementDefinition>>;
    public function getTestElementDefinition(elementId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ElementDefinition>>;
    public function getTestElementDefinition(elementId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestElementDefinition(this.testid, elementId, observe, reportProgress);
    }

    public function getTestElements(category: string, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfElementDefinition>;
    public function getTestElements(category: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfElementDefinition>>;
    public function getTestElements(category: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfElementDefinition>>;
    public function getTestElements(category: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestElements(this.testid, category, observe, reportProgress);
    }

    public function getTestElementsPoints(elementId: string, statistics: string, observe?: 'body', reportProgress?: boolean): Observable<Points>;
    public function getTestElementsPoints(elementId: string, statistics: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Points>>;
    public function getTestElementsPoints(elementId: string, statistics: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Points>>;
    public function getTestElementsPoints(elementId: string, statistics: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestElementsPoints(this.testid, elementId, statistics, observe, reportProgress);
    }

    public function getTestElementsSla(elementId: string, observe?: 'body', reportProgress?: boolean): Observable<Sla>;
    public function getTestElementsSla(elementId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Sla>>;
    public function getTestElementsSla(elementId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Sla>>;
    public function getTestElementsSla(elementId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestElementsSla(this.testid, elementId, observe, reportProgress);
    }

    public function getTestElementsValues(elementId: string, observe?: 'body', reportProgress?: boolean): Observable<ElementValues>;
    public function getTestElementsValues(elementId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ElementValues>>;
    public function getTestElementsValues(elementId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ElementValues>>;
    public function getTestElementsValues(elementId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestElementsValues(this.testid, elementId, observe, reportProgress);
    }

    public function getTestEvents(types?: Array<EventType>, limit?: number, offset?: number, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfEventDefinition>;
    public function getTestEvents(types?: Array<EventType>, limit?: number, offset?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfEventDefinition>>;
    public function getTestEvents(types?: Array<EventType>, limit?: number, offset?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfEventDefinition>>;
    public function getTestEvents(types?: Array<EventType>, limit?: number, offset?: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        return getTestEvents(this.testid, types, limit, offset, observe, reportProgress);
    }

    public function getTestMonitorDefinition(counterId: string, observe?: 'body', reportProgress?: boolean): Observable<CounterDefinition>;
    public function getTestMonitorDefinition(counterId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CounterDefinition>>;
    public function getTestMonitorDefinition(counterId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CounterDefinition>>;
    public function getTestMonitorDefinition(counterId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        return getTestMonitorDefinition(this.testid, counterId, observe, reportProgress);
    }
    public function getTestMonitors( observe?: 'body', reportProgress?: boolean): Observable<CounterDefinition>;
    public function getTestMonitors( observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CounterDefinition>>;
    public function getTestMonitors( observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CounterDefinition>>;
    public function getTestMonitors( observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return getTestMonitors(this.testid,observe,reportProgress);
    }
    public function getTestSLAGlobalIndicators( status?: string, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfSLAGlobalIndicatorDefinition>;
    public function getTestSLAGlobalIndicators( status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfSLAGlobalIndicatorDefinition>>;
    public function getTestSLAGlobalIndicators( status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfSLAGlobalIndicatorDefinition>>;
    public function getTestSLAGlobalIndicators( status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.getTestSLAGlobalIndicators(this.testid,status,observe,reportProgress);

    }
    public function getTestSLAPerInterval( status?: string, category?: string, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfSLAPerIntervalDefinition>;
    public function getTestSLAPerInterval( status?: string, category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfSLAPerIntervalDefinition>>;
    public function getTestSLAPerInterval( status?: string, category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfSLAPerIntervalDefinition>>;
    public function getTestSLAPerInterval( status?: string, category?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.getTestSLAPerInterval(this.testid,status,category,observe,reportProgress);
    }

    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'body', reportProgress?: boolean): Observable<ArrayOfSLAPerTestDefinition>;
    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArrayOfSLAPerTestDefinition>>;
    public function getTestSLAPerTest( status?: string, category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArrayOfSLAPerTestDefinition>>;
    public function getTestSLAPerTest( status?: string, category?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        return this.getTestSLAPerTest(this.testid,status,category,observe,reportProgress);
    }


}