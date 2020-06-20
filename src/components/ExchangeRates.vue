<template>
    <div id='bottom-content'>
        <div>
            <h5>{{ rate }}</h5>
            <p>1BTC = 2 378 UAH</p>
        </div>
        <div>
            <h5>{{ reserve }}</h5>
            <p>30 000 UAH</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExchangeRates',
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