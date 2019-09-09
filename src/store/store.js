import Vue from 'vue'
import Vuex from 'vuex'
import { getStorage } from '@/common/utils'
import { clearStorage } from "@/common/utils"
import { setStorage } from "@/common/utils";


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: getStorage("user") || null,
    },
    mutations: {
        // 登陆成功
        loginSuc(state, data) {
            state.user = data
            setStorage("user", { token: data.token, phone: data.phone });
        }
    }

})

export default store;