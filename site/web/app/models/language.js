System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Language;
    return {
        setters:[],
        execute: function() {
            Language = (function () {
                function Language(id, title, directory, isDefault) {
                    this.id = id;
                    this.title = title;
                    this.directory = directory;
                    this.isDefault = isDefault;
                    console.log('LanguageModel constructor ', id, title, directory, isDefault);
                }
                Language.asLanguages = function (jsonArray) {
                    return jsonArray.map(function (datum) { return Language.asLanguage(datum); });
                };
                Language.asLanguage = function (json) {
                    return new Language(json["id"], json["title"], json["directory"], json["default"]);
                };
                return Language;
            }());
            exports_1("Language", Language);
        }
    }
});

//# sourceMappingURL=language.js.map
