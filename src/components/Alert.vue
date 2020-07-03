<template>
    <section>
        <div class="columns is-mobile -is-centered alert-use">
            <div class="column is-11">
                <b-notification auto-close :type="`is-${alert.type}`" :active="alert.isActive">
                    {{alert.message}}
                </b-notification>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    div.alert-use{
        margin-top: 0px;
    }
</style>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState({
                alert: state => state.Notification.alert
            })
        }
    }
</script>