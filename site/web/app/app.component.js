System.register(["@angular/core", "./services/json-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, json_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (json_service_1_1) {
                json_service_1 = json_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_jsonService) {
                    var _this = this;
                    this._jsonService = _jsonService;
                    console.log('Application component constructor');
                    _jsonService.getLanguages()
                        .subscribe(function (data) {
                        console.log('data is', data);
                        _this.languages = data;
                    }, function (err) { return console.error(err); }, function () { return _this.languageDataLoadComplete(); });
                }
                AppComponent.prototype.languageDataLoadComplete = function () {
                    console.log('getLanguages() done this.languages:', this.languages);
                };
                AppComponent.prototype.ngOnInit = function () {
                    console.log("Application component initialized ...");
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app",
                    templateUrl: "./app/app.html",
                    providers: [json_service_1.JsonService]
                }),
                __metadata("design:paramtypes", [json_service_1.JsonService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map