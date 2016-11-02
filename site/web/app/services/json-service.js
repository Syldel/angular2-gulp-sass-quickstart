System.register(["@angular/core", '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw', "../models/language"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, language_1;
    var JsonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (language_1_1) {
                language_1 = language_1_1;
            }],
        execute: function() {
            JsonService = (function () {
                function JsonService(http) {
                    this.http = http;
                    this._dataUrl = './assets/data'; // URL to web API
                    console.log('JsonService::constructor()');
                }
                JsonService.prototype.getLanguages = function () {
                    console.log('JsonService::getLanguages()');
                    return this.http.get(this._dataUrl + '/languages.json')
                        .map(this.mapLanguages)
                        .catch(this.handleError);
                };
                JsonService.prototype.handleError = function (error) {
                    //console.error('JsonService::handleError');
                    // In a real world app, we might use a remote logging infrastructure
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        var body = error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error('JsonService::handleError', errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                JsonService.prototype.mapLanguages = function (res) {
                    console.log('JsonService::mapLanguages', res.json());
                    return language_1.Language.asLanguages(res.json());
                };
                JsonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JsonService);
                return JsonService;
            }());
            exports_1("JsonService", JsonService);
        }
    }
});

//# sourceMappingURL=json-service.js.map
