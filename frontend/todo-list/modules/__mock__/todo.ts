const BOARD_NUMS = 1
const ARRAY_ELEM_NUMS = 10

export interface task {
    id: number,
    title: string,
    description: string,
    done: boolean,
    tags: string[] // FIXME: each tag type must be union types
}


export const getTasks = (id: number) => {
    return [...Array(ARRAY_ELEM_NUMS).fill({id: 0, title: '', description: '', done: false, tags:[]})
    .map((it, index)=>{it.id = index;it.title = `TITLE${index}`;})]
}
export type Board = {id: number, tasks: task[]}
export type Boards = Array<Board>
export const __boards__: Boards = [...Array(BOARD_NUMS).fill({id: 0, tasks: getTasks(0)})]
