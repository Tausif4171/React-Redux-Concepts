// Action Creators

const newBooking = (name, amount) => {
    return {
        type: "NEW_BOOKING",        //actions
        payload: {
            name,
            amount
        }
    }
}

const cancelBooking = (name, refundAmount) => {
    return {
        type: "CANCEL_BOOKING",      //actions
        payload: {
            name,
            refundAmount
        }
    }
}

// Reducers
// Here we create three different reducers for three different departments for booking our ticket...
// 1
const reservationHistory = (oldreservationList = [], action) => {
    if (action.type === "NEW_BOOKING") {
        return [...oldreservationList, action.payload];
    }
    else if (action.type === "CANCEL_BOOKING") {
        return oldreservationList.filter((record) => {
            return record.name !== action.payload.name;
        })
    }
    else {
        return oldreservationList;
    }
}
// 2
const cancellationHistory = (oldcancellationList = [], action) => {
    if (action.type === "CANCEL_BOOKING") {
        return [...oldcancellationList, action.payload];
    }
    else {
        return oldcancellationList;
    }
}
// 3
const accounting = (totalMoney = 100, action) => {
    if (action.type === "NEW_BOOKING") {
        return totalMoney + action.payload.amount;
    }
    else if (action.type === "CANCEL_BOOKING") {
        return totalMoney - action.payload.refundAmount;
    }
    else {
        return totalMoney;
    }
}

// Redux Store
console.log(Redux);

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
    accounting: accounting,
    reservationHistory: reservationHistory,
    cancellationHistory: cancellationHistory,
})

const store = createStore(railwayCentralStore);

const action = newBooking("Tausif Khan", 10); // we have to pay initially some amount
store.dispatch(action); //here first we dispatch our action and then give to the reducers
store.dispatch(newBooking("Rehan Khan", 20)); // we can also take our action like this...
store.dispatch(newBooking("Faizan Khan", 30));
store.dispatch(cancelBooking("Rehan Khan", 10));

console.log(store.getState());