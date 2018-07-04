import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import {getRecommendList} from './../api/common_Api'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    lgOk:false,
    title: '',
    handbookRoot:"",
    handbookCount:"",
    specification:"",
    recommendList:[],
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
      state.lgOk = true;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.lgOk = false
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },
    [types.HANDBOOKROOT]:(state,root) =>{
      state.handbookRoot = root;
    },
    [types.HANDBOOKCOUNT]:(state,count) =>{
      state.handbookCount = count;
    },
    [types.SPECIFICATION]:(state,array) =>{
      state.specification = array;
    },
    [types.SET_RECOMMEND_LIST]:(state,list)=>{
      state.recommendList = list;
    }
  },
  actions:{
    [types.GET_RECOMMEND_LIST]:(state,self)=>{
      const list = getRecommendList();
      self.$store.commit(types.SET_RECOMMEND_LIST,list);

    }
  }
})


