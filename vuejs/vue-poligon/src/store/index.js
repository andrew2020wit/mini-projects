import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    numberState1: 100,
    numberState2: 500,
    strState1: "strState1",
    strState2: "strState2",
    objState1: { fieldNumber1: 21, fieldStr1: "field Str" },
    objState2: { fieldNumber2: 21, fieldStr2: "field Str" },
    arr1: ["str11", "str12", 201, 202],
    arr2: ["str21", "str22", 301, 302],
    arrOfObj: [
      { name: "Ivan", id: 1, age: 24 },
      { name: "Vova", id: 2, age: 34 },
      { name: "Boris", id: 3, age: 44 },
    ],
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
  actions: {},
  modules: {},
});
