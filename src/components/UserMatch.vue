<template>
    <div>
        <div>
            <div class="has-text-centered">
                <img :src="user.default_photo_url" />
            </div>

            <div class="columns is-mobile is-gapless">
                <div class="column is-8">
                    <h5 class="is-size-4"><strong>{{user.name}}</strong></h5>
                    <h5 class="has-text-grey">
                        <strong><i class="fa fa-university"></i></strong>
                        {{user.college}}
                    </h5>
                </div>
                <div class="column is-4 distance">
                    <h4 class="has-text-right is-size-6">
                        <strong class="has-text-danger">{{user.distance}} km</strong>
                        <i class="fas fas-map-maker-alt has-text-grey"></i>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    div.columns{
        padding-left: 1rem;
        padding-right: 1rem;
    }

    div.distance{
        h4{
            margin-top: 0.5rem;
        }
    }

</style>

<script>
    import {mapState} from 'vuex';
    export default {
        computed: {
            ...mapState('Match',{
                user: state => state.currentSelection
            })
        }
    }
</script>