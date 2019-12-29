
let createTimeoutPromise = function(time){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, time);
    })
};


export const increment = () => {
    return async function (dispatch) {
        await createTimeoutPromise(2000);
        dispatch({type:"INCREMENT"})

    }
};