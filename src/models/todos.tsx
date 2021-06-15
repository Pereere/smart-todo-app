export interface TodoState {
    todos: Array<{
        id: string,
        title: string,
        done: boolean
    }>
}

export interface PayloadAddTodo {
    payload: {
        id: string,
        title: string,
        done: boolean,
    }
}

export interface PayloadUpdate {
    payload: {
        id: string,
        title: string,
    }
}
