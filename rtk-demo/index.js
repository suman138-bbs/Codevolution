const store = require('./app/Store')
const { cakeActions } = require('./features/cake/cakeSlice')
 

console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State',store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

unsubscribe()