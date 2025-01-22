import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      await new Promise(r => setTimeout(r, 5000));
      throw new Error("backend is down")
      const res = await axios.get(`https://sum-server.100xasdasd.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});