<template>
    <div>
        <Header />
        <main class="main-content">
            <ExchangerInputs :headerContent="$t('headerContent')" :textGIVE="$t('textGIVE')" :textCount="$t('textCount')" :textGET="$t('textGET')" :textButtonTRUE="$t('textButton.true')" :textButtonFALSE="$t('textButton.false')" :error="$t('error')" />
            <ExchangeRates :rate="$t('rate')" :reserve="$t('reserve')" />
        </main>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import ExchangerInputs from '../components/ExchangerInputs.vue';
import ExchangeRates from '../components/ExchangeRates.vue';
export default {
    name: 'PageExchange',
    components: {
        Header,
        ExchangerInputs,
        ExchangeRates
    }
}
</script>

<style>
.main-content {
    height: calc(100vh - 77.6px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>