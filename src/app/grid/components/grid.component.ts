import {Component} from "@angular/core";
import {OnInit, OnDestroy} from "@angular/core";

@Component({
    templateUrl: './app/grid/components/grid.html'
})
export class GridComponent implements OnInit, OnDestroy {

    ngOnInit() {
        console.log('GridComponent ngOnInit');
    }

    ngOnDestroy() {
        console.log('GridComponent ngOnDestroy');
    }
}
