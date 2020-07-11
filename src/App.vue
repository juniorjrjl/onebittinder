<template>
	<div id="app">
		<Navbar />
		<Alert />
		<router-view/>
	</div>
</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import router from './router';
	import Navbar from './components/Navbar';
	import Alert from './components/Alert';

	export default{
		components: {
			Navbar,
			Alert
		},
		channels:{
			MatchNotificationChannel: {
				received(data){
					this.$buefy.toast.open({type: 'is-success', message: data['message']})
				}
			},
			MessageNotificationChannel: {
				received(data){
					this.setNewMessage(data);
				}
			}
		},
		computed: {
			...mapGetters(['isGeolocationEnabled', 'accountToken'])
		},
		watch: {
			isGeolocationEnabled(newValue){
				if(newValue) router.push('/');
			},
			accountToken(newValue){
				this.performConnectionBasedOnToken(newValue);
			}
		},
		mounted() {
			this.performConnectionBasedOnToken(this.accountToken);
		},
		methods: {
			...mapActions('Notification', ['alert']),
			...mapActions('Message', ['setNewMessage']),
			performConnectionBasedOnToken(token){
				if(token){
					this.$cable.subscribe({channel: 'MatchNotificationChannel', token: token});
				}else{
					this.$cable.unsubscribe('MatchNotificationChannel');
				}
			}
		}
	}

</script>
