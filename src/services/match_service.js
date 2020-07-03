import axios from 'axios';
import store from '../store';

export default{
    async loadSelectionList() {
        let response = await axios.get("selection_lists", { headers: store.getters['accountHeaders']});
        return response.data
    }
}