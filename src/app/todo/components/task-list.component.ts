import {Component} from "@angular/core";
import {Task} from "../models/task";
import {OnInit} from "@angular/core";
import {TaskService} from "../services/task-service";
import {TaskComponent} from "./task.component";

@Component({
    selector: 'task-list',
    templateUrl: './app/todo/components/task-list.html',
    styleUrls: ['./app/todo/components/task-list.css'],
    providers: [TaskService]
})
export class TaskListComponent implements OnInit {

    todoCount:number;
    selectedTask:Task;
    tasks:Array<Task>;

    constructor(private _taskService:TaskService) {
        this.tasks = _taskService.getTasks();
        this.calculateTodoCount();
    }

    ngOnInit() {
        //console.log('TaskListComponent init this.tasks:', this.tasks);
        console.log("Todo component initialized with " + this.tasks.length + " tasks.");

        // execute callback when the page is ready:
        Zepto(function($){
          console.log('Ready to Zepto!');

          $(".red_square").addClass("move");

          $(".some_element").animate({
            opacity: 0.25,
            //left: '50px',
            backgroundColor: '#abcdef',
            rotateZ: '45deg',
            translate3d: '0,10px,0'
          }, 4500, 'ease-out');

        });

    }

    calculateTodoCount() {
        this.todoCount = this.tasks.filter(t => !t.done).length;
    }

    select(task:Task) {
        this.selectedTask = task;
    }
}
