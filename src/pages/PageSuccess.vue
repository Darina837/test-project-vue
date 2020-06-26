<template>
    <div>
        <Header />
        <Success :success1="$t('success.1')" :success2="$t('success.2')" />
    </div>   
</template>

<script>
import Header from '../components/Header.vue';
import Success from '../components/Success.vue';
export default {
    name: 'PageSuccess',
    components: {
        Header,
        Success
    },
    mounted() {
        setTimeout(() => {
            this.$store.state.inputAmountFrom = '';
            this.$store.state.inputAmountTo = '';
            this.$store.state.from = '';
            this.$store.state.to= '';
            this.$store.state.rateAmount = '';
            this.$store.state.reserveAmount = '';
            this.$router.push({name: 'home'});
        }, 3000);
    }
}
</script>