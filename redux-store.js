// Action Creators

const newBooking = (name, amount) =>{
    return {
        type : "NEW_BOOKING",
        payload : {
            name,
            amount
        }
    }
}

const cancelBooking = (name, refundAmount) =>{
    return {
        type: "CANCEL_BOOKING",
        payload: {
            name,
            refundAmount
        }
    }
}