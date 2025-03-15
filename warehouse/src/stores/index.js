import { defineStore } from "pinia";
//options store
export const useUserStore = defineStore("basemessage", {
  state: () => {
    //相当于data 防止数据污染
    return { username: EAO };
  },
  getters: {
    //相当于computed 计算属性
    getterUserName(state) {
      return state.username;
    },
  },
  actions: {
    //相当于methods
    addName() {
      //this指向对应的store仓库
      this.username;
    },
  },
});
