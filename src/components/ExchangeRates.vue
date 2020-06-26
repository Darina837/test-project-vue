<template>
    <div id='bottom-content'>
        <div v-if="rateAmount">
            <h5>{{ rate }}</h5>
            <p>1 {{from}} = {{rateAmount}} {{to}}</p>
        </div>
        <div v-if="reserveAmount">
            <h5>{{ reserve }}</h5>
            <p>{{reserveAmount}} {{to}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExchangeRates',
    computed: {
        from: function() {
            return this.$store.getters.from;
        }, //выбранная валюта на отдачу
        to: function() {
            return this.$store.getters.to;
        }, //выбранная валюта на получение
        rateAmount: function() {
            return this.$store.getters.rateAmount;
        }, //курс валюты
        reserveAmount: function() {
            return this.$store.getters.reserveAmount;
        } //резерв валюты на получение
    },
    props: {
        rate: String,
        reserve: String
    }
}
</script>

<style>
#bottom-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
#bottom-content > div {
    text-align: center;
    color: rgb(122, 122, 122);
}
</style>