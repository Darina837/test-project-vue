<template>
    <main class="main-content">
        <h1>{{success1}} <span>{{ inputAmountFrom }}{{ from }}</span> {{success2}} <span>{{ inputAmountTo }}{{ to }}</span></h1>
    </main>
</template>

<script>
export default {
    name: 'Success',
    props: {
        success1: String, 
        success2: String
    },
    computed: {
        from: function() {
            return this.$store.getters.from;
        }, //выбранная валюта на отдачу
        to: function() {
            return this.$store.getters.to;
        }, //выбранная валюта на получение
        inputAmountFrom: function() {
            return this.$store.getters.inputAmountFrom;
        }, //число на отдачу
        inputAmountTo: function() {
            return this.$store.getters.inputAmountTo;
        } //число на получение
    }
}
</script>

<style scoped>
span {
    color: rgb(65, 67, 156);
}
</style>