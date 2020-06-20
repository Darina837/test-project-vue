<template>
    <div id="exchanger-wrapper">
        <h1>{{ headerContent }}</h1>
        <div id="exchanger">
            <div class="label-with-input">
                <label for="select-to-give">{{ textGIVE }}</label>
                <select id='select-to-give' v-model="selectedCurrencyGIVE">
                    <option v-for="currency in arrayСurrenciesGIVE" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input">
                <label for="input-count">{{ textCount }} {{ selectedCurrencyGIVE }}</label>
                <input type="number" id="input-count" min="1" />
            </div>
            <div>
                <h6>стрелка</h6>
            </div>
            <div class="label-with-input">
                <label for="select-to-get">{{ textGET }}</label>
                <select id='select-to-get' v-model="selectedCurrencyGET">
                    <option v-for="currency in arrayСurrenciesGIVE" :key="currency">{{ currency }}</option>
                </select>
            </div>
            <div class="label-with-input">
                <label for="input-count">{{ textCount }} {{ selectedCurrencyGET }}</label>
                <input type="number" id="input-count" min="1" />
            </div>
        </div>
        <button disabled>{{ textButton.toUpperCase() }}</button>
    </div>
</template>

<script>
export default {
    name: 'ExchangerInputs',
    data() {
        return {
            arrayСurrenciesGIVE: ['BTC', 'ETH', 'EUR', 'UAH'],
            arrayСurrenciesGET: ['BTC', 'ETH', 'EUR', 'UAH'],
            selectedCurrencyGIVE: 'BTC',
            selectedCurrencyGET: 'UAH',
            
        }
    },
    props: {
        headerContent: String,
        textGIVE: String,
        textCount: String,
        textGET: String,
        textButton: String
    }

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