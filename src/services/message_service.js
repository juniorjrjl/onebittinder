import axios from 'axios';
import store from '../store';

export default{
    async sendMessage(body, matchId){
        let response = await axios.post('messages', {message:{body: body, match_id: matchId}}, 
            {headers: store.getters['accountHeaders']});
        return response.data;
    },
    async loadMessages(matchId){
        let response = await axios.get(`messages/${matchId}`, 
            {headers: store.getters['accountHeaders']});
        return response.data;
    }
}