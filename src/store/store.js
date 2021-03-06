import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        arrayRates: [
            {
                name: 'BTC',
                UAH: 247702.11,
                EUR: 8289.77,
                ETH: 40.96,
                reserve: 4
            },

            {
                name: 'UAH',
                BTC: 0.000004,
                EUR: 0.033,
                ETH: 0.00017,
                reserve: 30000
            },

            {
                name: 'EUR',
                UAH: 29.88,
                BTC: 0.00012,
                ETH: 0.0049,
                reserve: 14000
            },

            {
                name: 'ETH',
                UAH: 6052.36,
                EUR: 202.55,
                BTC: 0.024,
                reserve: 18
            },
        ],
        from: '',
        to: '',
        inputAmountFrom: '',
        inputAmountTo: '',
        rateAmount: '',
        reserveAmount: ''
    },
    getters: {
        arrayRatesFrom: state => {
            let arr = [];
            for(let item of state.arrayRates) {
                if(item.name !== state.to) {
                    arr.push(item.name)    
                }     
            }
            return arr;
        },
        allRates: state => {
            return state.arrayRates
        },
        arrayRatesTo: state => {
            let arr = [];
            for(let item of state.arrayRates) {
                if(item.name !== state.from) {
                    arr.push(item.name);
                } 
            }        
            return arr;
        },
        from: state => {
            return state.from;
        },
        to: state => {
            return state.to;
        },
        inputAmountFrom: state => {
            return state.inputAmountFrom;
        },
        inputAmountTo: state => {
            return state.inputAmountTo;
        },
        rateAmount: state => {
            if(state.from !== '' && state.to !== '') {
                let element = state.arrayRates.find( el => el.name === state.from );
                for(let prop in element) {
                    if(prop === state.to) {
                        state.rateAmount = element[prop];
                    } 
                }
            }
            return state.rateAmount
        },
        reserveAmount: state => {
            if(state.to !== '') {
                let element = state.arrayRates.find( el => el.name === state.to );
                for(let prop in element) {
                    if(prop === 'reserve') {
                        state.reserveAmount = element[prop];
                    } 
                }
            }
            return state.reserveAmount
        },
        isDisabledButton: state => {
            return state.isDisabledButton;
        }
    },
    mutations: {
        setFrom: (state, newValue) => {
            state.from = newValue
        },
        setTo: (state, newValue) => {
            state.to = newValue
        },
        setAmountFrom: (state, newValue) => {
            let element = state.arrayRates.find( el => el.name === state.from );
            state.inputAmountFrom = Number(newValue);
            for(let prop in element) {
                if(prop === state.to) {
                    let result = newValue * element[prop];
                    state.inputAmountTo = parseFloat(result.toFixed(2));
                }
            }
        },
        setAmountTo: (state, newValue) => {
            let element = state.arrayRates.find( el => el.name === state.to );
            state.inputAmountTo = Number(newValue);
            for(let prop in element) {
                if(prop === state.from) {
                    let result = newValue * element[prop];
                    state.inputAmountFrom = parseFloat(result.toFixed(2));
                }
            }
        },
        change: state => {
            state.inputAmountFrom = 0;
            state.inputAmountTo = 0;
            let tmp = state.from;
            state.from = state.to;
            state.to = tmp;
        }
    }
})