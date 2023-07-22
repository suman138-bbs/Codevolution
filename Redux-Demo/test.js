
const reducer = (acc,value) => {
    return acc+value
}

const ar = [1, 2]


const result = ar.reduce(reducer, 3)


console.log(result);

/**
 * useReducer(reducer,initialState)
 * 
 * reducer(currentState,action)
 */