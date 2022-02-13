// Action Creators

const newBooking = (name, amount) => {
    return {
        type: "NEW_BOOKING",
        payload: {
            name,
            amount
        }
    }
}

const cancelBooking = (name, refundAmount) => {
    return {
        type: "CANCEL_BOOKING",
        payload: {
            name,
            refundAmount
        }
    }
}

// Reducers

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

const cancellationHistory = (oldcancellationList = [], action) => {
    if (action.type === "CANCEL_BOOKING") {
        return [...oldcancellationList, action.payload];
    }
    else {
        return oldcancellationList;
    }
}
const accounting = (totalMoney = 100, action) => {
    if (action.type === "NEW_BOOKING") {
        return totalMoney + action.payload.amount; // we have to pay initially some amount
    }
    else if (action.type === "CANCEL_BOOKING") {
        return totalMoney - action.payload.refundAmount;
    }
    else {
        return totalMoney;
    }
}