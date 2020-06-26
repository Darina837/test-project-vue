<template>
    <header class="header">
        <div class="header-content">
            <router-link to="/"><h1>DLExchanger</h1></router-link>   
            <select v-model="selectedLanguage" @change="setLocale">
                <option v-for="language in arrayLanguages" :key="language">{{language}}</option>
            </select>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            selectedLanguage: this.$i18n.locale,
            arrayLanguages: ['ru', 'ua', 'en']
        }
    },
    methods: {
        setLocale() {
            this.$i18n.locale = this.selectedLanguage;
        }
    }
}
</script>

<style scoped>
    .header {
        background-color: rgb(65, 67, 156);    
        padding: 15px 0;
    }
    .header-content {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;
    }
    .header-content > a {
        color: white;
        text-decoration: none;
    }
    .header-content > ul {
        list-style: none;
    }
    .header-content > ul > li {
        margin: 0 0 10px;
    }
</style>