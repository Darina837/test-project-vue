<template>
    <div id="exchanger-wrapper">
        <h1>{{ headerContent }}</h1>
        <div id="exchanger">
            <div class="label-with-input">
                <label for="select-to-give">{{ textGIVE }}</label>
                <select id='select-to-give' v-model="from" @change="setFrom">
                    <option v-for="currency in arrayRatesFrom" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input">
                <label for="input-count">{{ textCount }} {{ from }}</label>
                <input type="number" id="input-count"  v-model="inputAmountFrom" @input="setAmountFrom" />
            </div>
            <div>
                <h6>стрелка</h6>
            </div>
            <div class="label-with-input">
                <label for="select-to-get">{{ textGET }}</label>
                <select id='select-to-get' v-model="to" @change="setTo">
                    <option v-for="currency in arrayRatesTo" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input">
                <label for="input-count">{{ textCount }} {{ to }}</label>
                <input type="number" id="input-count" min="0" v-model="inputAmountTo" @input="setAmountTo" />
            </div>
        </div>
        <button disabled>{{ textButton.toUpperCase() }}</button>
    </div>
</template>

<script>
export default {
    name: 'ExchangerInputs',
    computed: {
        allRates: function allRates() {
            return this.$store.getters.allRates;
        },
        arrayRatesFrom: function arrayRatesFrom() {
            return this.$store.getters.arrayRatesFrom;
        },
        from: function from() {
            return this.$store.getters.from;
        },
        arrayRatesTo: function arrayRatesTo() {
            return this.$store.getters.arrayRatesTo;
        },
        to: function to() {
            return this.$store.getters.to;
        },
        inputAmountFrom: function inputAmountFrom() {
            return this.$store.getters.inputAmountFrom;
        },
        inputAmountTo: function inputAmountTo() {
            return this.$store.getters.inputAmountTo;
        }
    },
    methods: {
        setFrom(e) {
            this.$store.commit('setFrom', e.target.value)
        },
        setTo(e) {
            this.$store.commit('setTo', e.target.value)
        },
        setAmountFrom(e) {
            this.$store.commit('setAmountFrom', e.target.value)
        },
        setAmountTo(e) {
            this.$store.commit('setAmountTo', e.target.value)
        }
    },
    props: {
        headerContent: String,
        textGIVE: String,
        textCount: String,
        textGET: String,
        textButton: String
    },

}
</script>

<style>
#exchanger-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#exchanger-wrapper > h1 {
    color: rgb(65, 67, 156);
}
#exchanger-wrapper > button {
    padding: 5px 20px;
}
#exchanger {
    padding: 50px 5px 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#exchanger > div {
    margin-right: 50px;
}
.label-with-input {
    display: flex;
    flex-direction: column;
    width: 100px;
}
.label-with-input > label {
    padding-bottom: 10px;
}
#select-to-give, #select-to-get {
    border: none;
    border-bottom: 1px solid black;
    text-align-last: center;
}
</style>