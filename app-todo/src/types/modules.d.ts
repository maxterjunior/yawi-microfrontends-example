declare module '@yawi/store' {
    export function publicApiFunction(): void;
    interface Todo {
        id: number;
        text: string;
        completed: boolean;
    }
    import { Observable } from 'rxjs';
    class StoreTodo {
        private _storeTodo$;
        private _id;
        private _key;
        constructor();
        get storeTodo$(): Observable<Todo[]>;
        get id(): number;
        changeCompleted(id: number): void;
        addTodo(todo: Todo): void;
        deleteTodo(id: number): void;
        private todos;
        private saveInLocalStorage;
        private getFromLocalStorage;
    }
    export const storeTodo: StoreTodo;
    type State = {
        todos: Todo[];
        id: number;
        changeCompleted: (id: number) => void;
        addTodo: (todo: Todo) => void;
        deleteTodo: (id: number) => void;
    };
    export const useStoreTodo: Omit<Omit<import("zustand/vanilla").StoreApi<State>, "setState"> & {
        setState<A extends string | {
            type: string;
        }>(partial: State | Partial<State> | ((state: State) => State | Partial<State>), replace?: boolean, action?: A): void;
    }, "persist"> & {
        persist: {
            setOptions: (options: Partial<import("zustand/middleware").PersistOptions<State, State>>) => void;
            clearStorage: () => void;
            rehydrate: () => void | Promise<void>;
            hasHydrated: () => boolean;
            onHydrate: (fn: (state: State) => void) => () => void;
            onFinishHydration: (fn: (state: State) => void) => () => void;
            getOptions: () => Partial<import("zustand/middleware").PersistOptions<State, State>>;
        };
    };
}