import {Component, OnInit} from "@angular/core";
import {JsonService} from "./services/json-service";
import {Language} from "./models/language";

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    providers: [JsonService]
})
export class AppComponent implements OnInit {

    languages:Array<Language>;

    constructor(private _jsonService:JsonService) {
        console.log('Application component constructor');

        _jsonService.getLanguages()
        .subscribe(
          (data: Array<Language>) => {
            console.log('data is', data);
            this.languages = data;
          },
          err => console.error(err),
          () => this.languageDataLoadComplete()
        );

    }

    private languageDataLoadComplete() {
        console.log('getLanguages() done this.languages:', this.languages);
    }

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
