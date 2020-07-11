<template>
    <div>
        <div class="chat-list">
            <div v-for="m in messages" :key="m.created_at">
                <MessageChat :isMatchMessage="m.isMatchMessage" :body="m.body"/>
            </div>
        </div>
        <div class="columns is-mobile">
            <div class="column is-10">
                <b-input v-model="body" class="message-text" />
            </div>
            <div class="column is-2">
                <b-button class="send-button" type="is-info" icon-pack="fas"  
                    icon-right="paper-plane" @click="send()"/>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .chat-list{
        overflow-y: auto; 
        border: solid 1px #a9a9a9;
        height: 80vh;
        width: 100wh;
    }
    .message-text{
        margin-top: 5px;
        margin-left: 5px;
    }
    .send-button{
        margin-top: 5px;
        margin-left: -10px;
    }
</style>

<script>
    import MessageChat from '../components/MessageChat';
    import {mapActions, mapGetters, mapState} from 'vuex';
    export default{
        components:{
            MessageChat
        },
        data(){
            return{
                body: ""
            }
        },
        methods: {	
            send(){
                this.sendMessage(this.body);
                this.body = "";
            }		,
            ...mapActions('Message', ['sendMessage', 'findMessages', 'selectMatch'])
        },
        computed: {
            ...mapGetters(['accountToken']),
            ...mapState('Message', {messages: state => state.messages})
        },
        watch: {
			accountToken(newValue){
				this.performConnectionBasedOnToken(newValue);
			}
		},
        mounted(){
            this.selectMatch(this.$route.params.matchId);
            this.findMessages();
            this.$cable.subscribe({channel: 'MessageNotificationChannel', token: this.accountToken});
        },
        beforeDestroy(){
            this.$cable.unsubscribe('MessageNotificationChannel');
        }
    }
</script>