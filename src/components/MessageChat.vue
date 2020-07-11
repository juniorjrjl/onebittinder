<template>
    <div class="columns is-mobile">
        <div class="column messageContainer">
            <b-tag rounded size="is-medium" type="is-grey" v-if="!isMatchMessage">
                {{body}}
            </b-tag>
        </div>
        <div class="column messageContainer"></div>
        <div class="column messageContainer"></div>
        <div class="column messageContainer">
            <b-tag rounded size="is-medium" type="is-info" v-if="isMatchMessage">
                {{body}}
            </b-tag>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .messageContainer{
        margin: 5px;
    }
</style>
<script>
    export default{ props:['isMatchMessage', 'body'] }
</script>