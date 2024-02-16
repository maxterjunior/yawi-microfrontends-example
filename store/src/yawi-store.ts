// // Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() { }

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Rxjs - store Todo

import { BehaviorSubject, Observable } from 'rxjs';


class StoreTodo {
    private _storeTodo$: BehaviorSubject<Todo[]>
    private _id: number
    private _key: string

    constructor() {
        this._id = 0
        this._key = 'todos'
        this._storeTodo$ = new BehaviorSubject(this.getFromLocalStorage())
    }

    get storeTodo$(): Observable<Todo[]> {
        return this._storeTodo$.asObservable()
    }

    get id(): number {
        return this._id
    }

    changeCompleted(id: number) {
        const todos = this.todos().map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this._storeTodo$.next(todos)
        this.saveInLocalStorage()
    }

    addTodo(todo: Todo) {
        this._storeTodo$.next([...this._storeTodo$.value, todo])
        this._id++
        this.saveInLocalStorage()
    }

    deleteTodo(id: number) {
        const todos = this.todos().filter(todo => todo.id !== id)
        this._storeTodo$.next(todos)
        this.saveInLocalStorage()
    }

    private todos(): Todo[] {
        return this._storeTodo$.getValue()
    }

    private saveInLocalStorage() {
        localStorage.setItem(this._key, JSON.stringify(this.todos()))
    }

    private getFromLocalStorage(): Todo[] {
        const t = JSON.parse(localStorage.getItem(this._key) || '[]') as Todo[]
        console.log('getFromLocalStorage', t,this._key)
        return t
    }
}

export const storeTodo = new StoreTodo()


// Zustand - store Todo

import create from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";

type State = {
    todos: Todo[];
    id: number;
    changeCompleted: (id: number) => void;
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
};

export const useStoreTodo = create<State>()(devtools(persist((set, get, api) => ({
    todos: [],
    id: 0,
    changeCompleted: (id: number) => {
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        }));
    },
    addTodo: (todo: Todo) => {
        set((state) => ({
            todos: [...state.todos, todo],
            id: state.id + 1,
        }));
    },
    deleteTodo: (id: number) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    }
}), {
    name: 'todos-zustand', // (opcional) nombre de la clave en localStorage
    getStorage: () => localStorage, // (opcional) por defecto es localStorage
})));
