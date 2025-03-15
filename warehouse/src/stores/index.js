import { defineStore } from "pinia";
import { computed, ref } from "vue";
//使用const方法定义后还不是仓库而是函数，需要使用时才变成仓库
//options store（选项式）
export const useUserStore = defineStore("basemessage", {
  state: () => {
    //相当于data 防止数据污染
    return { username: "EAO" };
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
//setup store（组合式）
export const useEmailStore = defineStore("email", () => {
  //定义响应式数据，相当于在state中
  const email = ref("1119346628@qq.com");
  const getterEmail = computed(() => {
    //相当于getters
    return email.value;
  });
  function addEmail() {
    //相当于actions
    email.value = email.value;
  }
  return { email, getterEmail, addEmail }; //最后要暴露
});
