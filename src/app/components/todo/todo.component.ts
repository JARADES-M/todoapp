import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  additem: boolean = false;
  action: string = "Add Item";

  todos: Todos[] = [
    {action: "Start Post Degree", dueDate: new Date('2019-4-2'), status: Status.Todo}
  ]

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.additem = !this.additem;
    if (this.additem) {
      this.action = "Close";
    } else {
      this.action = "Add Item";
    }
    
  }

}

interface Todos {
  action: string;
  dueDate: Date;
  status: Status;
}

enum Status {
  Todo = 'Todo',
  Doing = 'Doing',
  Done = 'Done'
}