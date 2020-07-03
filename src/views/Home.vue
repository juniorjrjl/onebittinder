<template>
    <section class="section">
        <div class="container" v-if="currentSelection">
            <UserMatch />
        </div>
        <div v-else-if="loading" class="loading has-text-centered">
            <i class="fa fa-spinner fa-spin fa-4x"></i>
            <h1 class="is-size-5">Carregando lista de Seleção</h1>
        </div>
        <div v-else class="empty-selection-list">
            <h1 class="is-size-4 has-text-centered">Não há mais usuários disponíveis para você no momento</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section.section {
        padding: 0.5em;

        div.loading {
            padding-top: 10em;

            h1{
                margin-top: 1em;
            }
        }

        div.empty-selection-list{
            margin-top: 7em;
            h1 {
                margin-top: 7em;
            }
        }
    }
</style>

<script>
    import { mapActions, mapState } from 'vuex';
    import UserMatch from '../components/UserMatch';
    export default {

        components:{
            UserMatch
        },

        computed:{
            ...mapState("Match", ["selectionList", "loading", "currentSelection"])
        },

        watch:{
            loading(){
                this.setCurrentSelection(0);
            }
        },

        methods:{
            ...mapActions("Match", ["loadSelectionList", "setCurrentSelection"])
        },

        mounted(){
            this.loadSelectionList();
        }
    }
</script>