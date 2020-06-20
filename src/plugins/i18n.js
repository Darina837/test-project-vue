import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'ru',
    messages: { 
        ru: {
            headerContent: 'Обменник',
            textGIVE: 'Отдаёте',
            textCount: 'Сумма в',
            textGET: 'Получаете',
            textButton: 'Укажите сумму',
            rate: 'Курс',
            reserve: 'Резерв'
        },
        ua: {
            headerContent: 'Обмінник',
            textGIVE: 'Віддаєте',
            textCount: 'Сума в',
            textGET: 'Отримаєте',
            textButton: 'Вкажіть суму',
            rate: 'Курс',
            reserve: 'Резерв'
        },
        en: {
            headerContent: 'Exchanger',
            textGIVE: 'Give in',
            textCount: 'Amount',
            textGET: 'Get in',
            textButton: 'Enter amount',
            rate: 'Rate',
            reserve: 'Reserve'
        }
    }
})