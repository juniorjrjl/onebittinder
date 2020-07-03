<template>
    <div>
        <div class="columns is-mobile" v-if="loggedIn">
            <NavBarItem path="/user" icon="user" />
            <NavBarItem path="/" icon="fire" />
            <NavBarItem path="/chats" icon="comments" />
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation" v-else>
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <h1 class="has-text-white title">OnieBitTinder</h1>
                </a>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss">

    nav, div.columns {
        background-color: #ff6666;
    }

</style>

<script>

    import store from '../store';
    import NavBarItem from './NavbarItem';

    export default {
        components: {
            NavBarItem
        },
        
        computed: {
            loggedIn(){
                return store.getters['isLoggedIn']
            }           
        }
    }
</script>