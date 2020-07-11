import Vue  from 'vue';
import Vuex from 'vuex';
import Account from './stores/account';
import Notification from './stores/notification';
import Match from './stores/match';
import Message from './stores/message';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Account,
        Notification,
        Match,
        Message
    }
});