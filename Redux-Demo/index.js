const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combinedreducers  = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCKED = 'ICE_RESTOCKED';
/**Action :is an object with properties type */
function orderCake() {
    return {
    type: CAKE_ORDERED,
    quantity:1
}
}

function orderIce() {
    return {
        type: ICE_ORDERED,
        payload:1
    }
}


const restockedCake = (qty = 1)=>{
    
    return {
        type: CAKE_RESTOCKED,
        payload:qty  ///Any additional information are payload
    }
}

const restockedIce = (qty = 1)=>{
    
    return {
        type: ICE_RESTOCKED,
        payload:qty  ///Any additional information are payload
    }
}
/**Reducers:(priviousState,action)=>newState */
const initialStateofCake = {
    noOfCake: 10
};
const initialStateofIce = {
    noOfIce: 10
};
// Reducer for Cake
const reducerCake = (state=initialStateofCake, action) => {   //Shopkeeper
    switch (action.type) {
        case "CAKE_ORDERED":
            return {
                ...state,
                noOfCake:state.noOfCake-1
            }
        case "CAKE_RESTOCKED":
            return {
                ...state,noOfCake:state.noOfCake+action.payload
            }
        default:
            return state
    }
}



// // Reducer for Cake
const reducerIce = (state=initialStateofIce, action) => {   //Shopkeeper
    switch (action.type) {
        case "ICE_ORDERED":
            return {
                ...state,
                noOfIce:state.noOfIce-1
            }
        case "ICE_RESTOCKED":
            return {
                ...state,noOfIce:state.noOfIce+action.payload
            }
        default:
            return state
    }
}
/**Redux Store
 * Responsibilities-
 * >>Holds application state
 * >>Allow access to state via getState()
 * >>Alllow state to be updated via dipatch(action)
 * >>Register listeners via subscribe(listener)
 * >>Handle s unregistering of listeners via the function returned subscribe(listener) 
 */




// const unsubscribe = store.subscribe(() => console.log("Updated State:", store.getState()))
 
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockedCake())
// store.dispatch(restockedCake())
// store.dispatch(restockedCake())



const rootReducer = combinedreducers({
    cake: reducerCake,
    icecream:reducerIce
    
})

const store = createStore(rootReducer);
const action = bindActionCreators(orderCake, orderIce,restockedCake,restockedCake, store.dispatch)
console.log("Initial State", store.getState())

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderIce())
console.log("Initial State", store.getState())
action.orderCake
console.log("Initial State", store.getState())

// unsubscribe()