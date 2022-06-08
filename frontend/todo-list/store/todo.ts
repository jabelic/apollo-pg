import { defineStore } from 'pinia'
import {__boards__, Boards, Board, task} from '@/modules/__mock__/todo'

type StateType = { boards: Boards } 
export const useTodoStore = defineStore('todo', {
  // state: () => ({ boards: __boards__ }),
  state: (): StateType => ({ boards: __boards__ }),
  actions: {
    addTask(baordId: number, title: string) {
      this.boards.forEach((board:Board) => {
        if (baordId === board.id) {
          board.tasks.push({ id: board.tasks.length, done: false, title, tags:[], description: '' })
        }
      })
    },
    changeStatus(boardId: number, id: number, done: boolean) {
      this.boards.forEach((board: Board) => {
        if (board.id === boardId) {
          board.tasks.forEach((task) => {
            if (task.id === id) task.done = done
          })
        }
      })
    },
    changeTitle(boardId: number, id: number, title: string) {
      this.boards.forEach((board: Board) => {
        if (board.id === boardId) {
          board.tasks.forEach((task) => {
            if (task.id === id) task.title = title
          })
        }
      })
    },
    deleteTask(boardId: number, id: number){
      const deletedTask = this.boards[boardId].tasks.find((it: task)=>it.id===id)
      if(deletedTask){
        this.boards[boardId].tasks = this.boards[boardId].tasks.filter((it: task)=>it.id!==id)
      }
    }
  },
  getters: {
    finishedTodos(state: StateType) {
      // autocompletion! ✨
      return state.boards.filter((board: Board) => board.tasks.filter((task) => task.done))
    },
    unfinishedTodos(state: StateType) {
      return state.boards.filter((board: Board) =>board.tasks.filter((task) => !task.done))
    },
    allBoards(state: StateType){
      return state.boards
    }
  },
})