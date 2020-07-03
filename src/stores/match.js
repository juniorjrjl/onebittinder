import MatchService from '../services/match_service';

export default{
    namespaced: true,

    state:{
        selectionList: [],
        currentSelection: null,
        loading: false
    },

    mutations:{
        setSelectionList(state, users){
            state.selectionList.push(...users);
        },
        setLoading(state, status){
            state.loading = status
        },
        setCurrentSelection(state, position){
            state.currentSelection = state.selectionList[position];
        }
    },

    actions: {
        loadSelectionList(context){
            context.commit("setLoading", true);

            MatchService.loadSelectionList().then(data => {
                context.commit("setSelectionList", data.users);
            }).catch().then(() =>{
                context.commit("setLoading", false);
            })
        },
        setCurrentSelection(context, position){
            context.commit("setCurrentSelection", position);
        }
    },

}