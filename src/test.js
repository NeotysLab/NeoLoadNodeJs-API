const Configuration = require("../dist").Configuration;
const HttpClient=require ("@angular/common/http").HttpClient;
const ResultsService= require("../dist").ResultsService;
const ApiModule=require("../dist").ApiModule;
const  HttpClientModule =require('@angular/common/http').HttpClientModule;


var token = {accountToken:"15304f743f34ca33c458927a40945b7424a2066b95563774"};
var  url="https://neoload-api.saas.neotys.com";
var testid="f2472490-34bd-45c4-a1e0-f426bf006daf";
this.conf = new Configuration({apiKeys:token, basePath:url+"/v1"});



var apimodule=new ApiModule();

var resultAPI=ApiModule.forRoot(conf);

resultAPI.getTest(testid).subscribe(testdefinition=>{
    print(testdefinition.name);
})