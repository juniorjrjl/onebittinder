import MessageService from '../services/message_service';

function buildLocalMessage(message, matchId){
    return {
        body: message.body, 
        isMatchMessage: message.user_id == matchId    
    }
}

export default{
    namespaced: true,
    state:{
        messages: [],
        matchId: 0
    },

    mutations:{
        findMessages(state){
            MessageService.loadMessages(state.matchId)
                .then(ms => state.messages = ms
                    .map(m => buildLocalMessage(m, state.matchId)));
        },
        sendMessage(state, body){
            MessageService.sendMessage(body, state.matchId);
        },
        setNewMessage(state, message){
            state.messages.push(buildLocalMessage(message, state.matchId));
        },
        selectMatch(state, matchId){
            state.matchId = matchId;
        }
    },

    actions:{
        findMessages(context){
            context.commit("findMessages");
        },
        sendMessage(context, body){
            context.commit("sendMessage", body);
        },
        setNewMessage(context, message){
            context.commit("setNewMessage", message);
        },
        selectMatch(context, matchId){
            context.commit("selectMatch", matchId);
        }
    },

    getters:{
        messages(state){
            return state.messages;
        },
        selectedMatch(state){
            return state.matchId;
        }
    }
}