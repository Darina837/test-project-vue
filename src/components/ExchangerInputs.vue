<template>
    <div id="exchanger-wrapper">
        <h1>{{ headerContent }}</h1>
        <form id="exchanger">
            <div class="label-with-input">
                <label for="select-to-give">{{ textGIVE }}</label>
                <select id='select-to-give' v-model="from" @change="setFrom">
                    <option v-for="currency in arrayRatesFrom" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input" id='input-wrapper-from'>
                <label for="input-count-from">{{ textCount }} {{ from }}</label>
                <input type="number" id="input-count-from" min="0" v-model="inputAmountFrom" @input="setAmountFrom" />
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
            <div class="label-with-input"  id='input-wrapper-to'>
                <label for="input-count-to">{{ textCount }} {{ to }}</label>
                <input type="number" id="input-count-to" min="0" v-model="inputAmountTo" @input="setAmountTo" />
                <label for="input-count-to" id='error-label'>{{ error }}</label>
            </div>
        </form>
        <input type="button" :disabled="disabledButton" id="btn" @click="redirect" :value="textButtonFALSE.toUpperCase()" />
    </div>
</template>

<script>
export default {
    name: 'ExchangerInputs',
    data() {
        return {
            disabledButton: true
        }
    },
    computed: {
        arrayRatesFrom: function() {
            return this.$store.getters.arrayRatesFrom;
        }, //массив валют на отдачу
        reserveAmount: function() {
            return this.$store.getters.reserveAmount;
        }, //резерв валюты на получение
        from: {
            get: function() {
                return this.$store.getters.from;
            },
            set: function(newValue) {
                this.$store.state.from = newValue
            }
        }, //выбранная валюта на отдачу
        arrayRatesTo: function() {
            return this.$store.getters.arrayRatesTo;
        }, //массив валют на получение
        to: {
            get: function() {
                return this.$store.getters.to;
            },
            set: function(newValue) {
                this.$store.state.to = newValue
            }
        }, //выбранная валюта на получение
        inputAmountFrom: {
            get: function() {
                return this.$store.getters.inputAmountFrom;
            },
            set: function(newValue) {
                this.$store.state.inputAmountFrom = newValue
            }
        }, //число на отдачу
        inputAmountTo: {
            get: function() {
                return this.$store.getters.inputAmountTo;
            },
            set: function(newValue) {
                this.$store.state.inputAmountTo = newValue;
            }
        } //число на получение
    },
    methods: {
        setFrom(e) {
            this.$store.commit('setFrom', e.target.value)
        }, //поменять валюту на отдачу
        setTo(e) {
            this.$store.commit('setTo', e.target.value)
        }, //поменять валюту на получение
        setAmountFrom(e) {
            this.$store.commit('setAmountFrom', e.target.value)
        }, //поменять число на отдачу
        setAmountTo(e) {
            this.$store.commit('setAmountTo', e.target.value);
        }, //поменять число на получение
        change() {
            this.$store.commit('change');
        }, //функция нажатия на стрелку обмена местами валют
        redirect() {
            this.$router.push({name: 'success'});
        }
    },
    updated() {
        if(this.$store.state.inputAmountTo <= this.$store.state.reserveAmount && this.$store.state.inputAmountTo.length !== 0 && this.$store.state.inputAmountTo !== 0 && this.$store.state.inputAmountFrom.length !== 0 && this.$store.state.inputAmountFrom !== 0) {
            document.getElementById('error-label').style = 'display: none;'
            document.getElementById('btn').value = this.textButtonTRUE.toUpperCase();
            document.getElementById('input-wrapper-from').style.color = 'black';
            document.getElementById('input-wrapper-to').style.color = 'black';
            document.querySelector('#input-wrapper-from > input').style = 'border-bottom: 1px solid black';
            document.querySelector('#input-wrapper-to > input').style = 'border-bottom: 1px solid black';
            for(let item of document.querySelectorAll('input[type="number"]')) {
                item.style = 'color: black; border-bottom: 1px solid black;'
            }
            return this.disabledButton = false; //успех
        } else if(this.$store.state.inputAmountTo > this.$store.state.reserveAmount) {
            document.getElementById('error-label').style = 'display: block;'
            document.getElementById('btn').value = this.textButtonFALSE.toUpperCase();
            document.getElementById('input-wrapper-from').style.color = 'red';
            document.getElementById('input-wrapper-to').style.color = 'red';
            document.querySelector('#input-wrapper-from > input').style = 'border-bottom: 1px solid red';
            document.querySelector('#input-wrapper-to > input').style = 'border-bottom: 1px solid red';
            for(let item of document.querySelectorAll('input[type="number"]')) {
                item.style = 'color: red; border-bottom: 1px solid red;'
            }
            return this.disabledButton = true; //сумма больше резерва
        }
        else {
            document.getElementById('error-label').style = 'display: none;'
            document.getElementById('btn').value = this.textButtonFALSE.toUpperCase();
            document.getElementById('input-wrapper-from').style.color = 'black';
            document.getElementById('input-wrapper-to').style.color = 'black';
            document.querySelector('#input-wrapper-from > input').style = 'border-bottom: 1px solid black';
            document.querySelector('#input-wrapper-to > input').style = 'border-bottom: 1px solid black';
            for(let item of document.querySelectorAll('input[type="number"]')) {
                item.style = 'color: black; border-bottom: 1px solid black;'
            }
            return this.disabledButton = true; //другой случай
        }
    }, //при обновлении значений меняется кнопка и стили
    props: {
        headerContent: String,
        textGIVE: String,
        textCount: String,
        textGET: String,
        textButtonTRUE: String,
        textButtonFALSE: String,
        error: String
    }
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
#btn {
    padding: 5px 20px;
}
#exchanger {
    padding: 50px 5px 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#exchanger > div {
    margin-right: 100px;
}
.label-with-input {
    display: flex;
    flex-direction: column;
    width: 100px;
}
.label-with-input > label {
    padding-bottom: 10px;
}
#select-to-give, #select-to-get, #input-count-from, #input-count-to {
    border: none;
    border-bottom: 1px solid black;
    text-align-last: center;
}
#error-label {
    color: red;
    display: none;
    width: 300px;
}
#input-count-from, #input-count-to {
    width: 150px;
}
</style>