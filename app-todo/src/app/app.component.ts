import { Component, OnInit } from '@angular/core';
import { Todo, storeTodo, } from '@yawi/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // standalone: true,
  // imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  
  title = 'app-todo';

  constructor() {
    this.storeSubscribe();
  }

  ngOnInit(): void {

  }

  todos: Todo[] = []

  storeSubscribe() {
    storeTodo.storeTodo$.subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    storeTodo.addTodo({
      id: Math.random(),
      text: 'New Todo',
      completed: false,
    });
  }

}
