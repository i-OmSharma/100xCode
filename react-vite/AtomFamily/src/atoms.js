import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    // find -> map, filter. It lets u find a specific function, value , element 
    return TODOS.find(x => x.id === id)
  },
//Other way
  // const foundTodo = null;
  // for (let i = 0; i < TODOS.length; i++) {
  //   if (TODOS[i].id ===id) {
  //     foundTodo = TODOS[i]
  //   }
  // }
  // return foundTodo
});