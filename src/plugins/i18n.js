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
            textButton: {true: 'Обменять', false: 'Укажите сумму'},
            rate: 'Курс',
            reserve: 'Резерв',
            error: 'Вы превысили резерв валюты',
            success: {1: 'Вы успешно обменяли', 2: 'на'}
        },
        ua: {
            headerContent: 'Обмінник',
            textGIVE: 'Віддаєте',
            textCount: 'Сума в',
            textGET: 'Отримаєте',
            textButton: {true: 'Обміняти', false: 'Вкажіть суму'},
            rate: 'Курс',
            reserve: 'Резерв',
            error: 'Ви перевищили резерв валюти',
            success: {1: 'Ви успішно обміняли', 2: 'на'}
        },
        en: {
            headerContent: 'Exchanger',
            textGIVE: 'Give in',
            textCount: 'Amount',
            textGET: 'Get in',
            textButton: {true: 'Exchange', false: 'Enter amount'},
            rate: 'Rate',
            reserve: 'Reserve',
            error: 'You have exceeded the currency reserve',
            success: {1: 'You have successfully exchanged', 2: 'for'}
        }
    }
})