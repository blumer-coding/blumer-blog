export const global = {
    state: {
        dialogFormVisible: false,
        signInVisible:true,
        signUpVisible:true,
    },
    actions: {
        showRegister({commit}) {
            commit('setDialogFormVisible', true);
        },
        hideRegister({commit}) {
            commit('setDialogFormVisible', false);
        },
        hideSignIn({commit}){
            commit('setSignInVisible',false);
        },
        showSignUp({commit}){
            commit('setSignUpVisible',true);
        },
        hideSignUp({commit}){
            commit('setSignUpVisible',false);
        }
    },
    mutations: {
        setDialogFormVisible(state,status){
            state.dialogFormVisible=status;
        },
        setSignInVisible(state,status){
            state.signInVisible=status;
        },
        setSignUpVisible(state,status){
            state.signUpVisible=status;
        }
    },
    getters:{
        getDialogFormVisible(state){
            return state.dialogFormVisible;
        },
        getSignInVisible(state){
            return state.signInVisible;
        },
        getSignUpVisible(state){
            return state.signUpVisible;
        }
    }
};