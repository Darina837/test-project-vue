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
                <label for="input-count-from">{{ textCount }} {{ from }}</label>
                <input type="number" id="input-count-from" v-model="inputAmountFrom" @input="setAmountFrom" />
            </div>
            <div>
                <h1 @click="change" id="change-button">↻</h1>
            </div>
            <div class="label-with-input">
                <label for="select-to-get">{{ textGET }}</label>
                <select id='select-to-get' v-model="to" @change="setTo">
                    <option v-for="currency in arrayRatesTo" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input">
                <label for="input-count-to">{{ textCount }} {{ to }}</label>
                <input type="number" id="input-count-to" v-model="inputAmountTo" @input="setAmountTo" />
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
        from: {
            get: function() {
                return this.$store.getters.from;
            },
            set: function(newValue) {
                this.$store.state.from = newValue
            }
        },
        arrayRatesTo: function arrayRatesTo() {
            return this.$store.getters.arrayRatesTo;
        },
        to: {
            get: function() {
                return this.$store.getters.to;
            },
            set: function(newValue) {
                this.$store.state.to = newValue
            }
        },
        inputAmountFrom: {
            get: function() {
                return this.$store.getters.inputAmountFrom;
            },
            set: function(newValue) {
                this.$store.state.inputAmountFrom = newValue
            }
        },
        inputAmountTo: {
            get: function() {
                return this.$store.getters.inputAmountTo;
            },
            set: function(newValue) {
                this.$store.state.inputAmountTo = newValue
            }
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
        },
        change() {
            this.$store.commit('change');
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
#change-button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}
#change-button:hover {
    color: rgb(65, 67, 156);
}
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