export class Language {

  constructor(
    public id:string,
    public title:string,
    public directory:string,
    public isDefault:boolean
  ) {
    console.log('LanguageModel constructor ', id, title, directory, isDefault);
  }

  static asLanguages(jsonArray: Array<Object>) {
    return jsonArray.map((datum) => Language.asLanguage(datum));
  }

  static asLanguage(json: Object) {
    return new Language(json["id"], json["title"], json["directory"], json["default"]);
  }

}
