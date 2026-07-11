function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger

    let totalPrice = quantity * pricePerItem;

    debugger

    if (quantity >= 10) {
        totalPrice *= 0.9;
        debugger;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;