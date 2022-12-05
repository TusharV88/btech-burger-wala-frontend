import { createReducer } from '@reduxjs/toolkit';

const initalState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :
        {
            alooTikkiBurger: {
                price: 58,
                quantity: 0
            },

            mexicanAlooTikkiBurger: {
                price: 69,
                quantity: 0
            },

            cornAndCheeseBurger: {
                price: 145,
                quantity: 0
            },

            veggieBurger: {
                price: 145,
                quantity: 0
            },

            spicyPannerBurger: {
                price: 189,
                quantity: 0
            },

            masalaEggBurger: {
                price: 65,
                quantity: 0
            },

            chickenKebabBurger: {
                price: 105,
                quantity: 0
            },

            chickenBurger: {
                price: 131,
                quantity: 0
            },

            grilledChickenAndCheeseBurger: {
                price: 159,
                quantity: 0
            },

            filetOFishBurger: {
                price: 175,
                quantity: 0
            },

        },

    subTotal: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
        : 0,
    tax: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).tax
        : 0,
    shippingCharges: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
        : 0,
    total: localStorage.getItem("cartPrices")
        ? JSON.parse(localStorage.getItem("cartPrices")).total
        : 0,
    shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
};


export const cartReducer = createReducer(initalState, {
    alooTikkiBurgerIncrement: (state) => {
        state.cartItems.alooTikkiBurger.quantity += 1;
    },
    mexicanAlooTikkiBurgerIncrement: (state) => {
        state.cartItems.mexicanAlooTikkiBurger.quantity += 1;
    },
    cornAndCheeseBurgerIncrement: (state) => {
        state.cartItems.cornAndCheeseBurger.quantity += 1;
    },
    veggieBurgerIncrement: (state) => {
        state.cartItems.veggieBurger.quantity += 1;
    },
    spicyPannerBurgerIncrement: (state) => {
        state.cartItems.spicyPannerBurger.quantity += 1;
    },
    masalaEggBurgerIncrement: (state) => {
        state.cartItems.masalaEggBurger.quantity += 1;
    },
    chickenKebabBurgerIncrement: (state) => {
        state.cartItems.chickenKebabBurger.quantity += 1;
    },
    chickenBurgerIncrement: (state) => {
        state.cartItems.chickenBurger.quantity += 1;
    },
    grilledChickenAndCheeseBurgerIncrement: (state) => {
        state.cartItems.grilledChickenAndCheeseBurger.quantity += 1;
    },
    filetOFishBurgerIncrement: (state) => {
        state.cartItems.filetOFishBurger.quantity += 1;
    },
    alooTikkiBurgerDecrement: (state) => {
        state.cartItems.alooTikkiBurger.quantity -= 1;
    },
    mexicanAlooTikkiBurgerDecrement: (state) => {
        state.cartItems.mexicanAlooTikkiBurger.quantity -= 1;
    },
    cornAndCheeseBurgerDecrement: (state) => {
        state.cartItems.cornAndCheeseBurger.quantity -= 1;
    },
    veggieBurgerDecrement: (state) => {
        state.cartItems.veggieBurger.quantity -= 1;
    },
    spicyPannerBurgerDecrement: (state) => {
        state.cartItems.spicyPannerBurger.quantity -= 1;
    },
    masalaEggBurgerDecrement: (state) => {
        state.cartItems.masalaEggBurger.quantity -= 1;
    },
    chickenKebabBurgerDecrement: (state) => {
        state.cartItems.chickenKebabBurger.quantity -= 1;
    },
    chickenBurgerDecrement: (state) => {
        state.cartItems.chickenBurger.quantity -= 1;
    },
    grilledChickenAndCheeseBurgerDecrement: (state) => {
        state.cartItems.grilledChickenAndCheeseBurger.quantity -= 1;
    },
    filetOFishBurgerDecrement: (state) => {
        state.cartItems.filetOFishBurger.quantity -= 1;
    },

    calculatePrice: (state) => {
        let sum = 0;

        for (let item in state.cartItems) {
            sum += state.cartItems[item].price * state.cartItems[item].quantity;
               
        }
        state.subTotal = sum;
        state.tax = Math.round(state.subTotal * 0.18);
        state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
        state.total = state.subTotal + state.tax + state.shippingCharges;

    },

    emptyCart: (state) => {
        state.cartItems = {
            alooTikkiBurger: {
                quantity: 0,
                price: 58,
            },
            mexicanAlooTikkiBurger: {
                quantity: 0,
                price: 69,
            },
            cornAndCheeseBurger: {
                quantity: 0,
                price: 145,
            },
            veggieBurger: {
                quantity: 0,
                price: 145,
            },
            spicyPannerBurger: {
                quantity: 0,
                price: 189,
            },
            masalaEggBurger: {
                quantity: 0,
                price: 65,
            },
            chickenKebabBurger: {
                quantity: 0,
                price: 105,
            },
            chickenBurger: {
                quantity: 0,
                price: 131,
            },
            grilledChickenAndCheeseBurger: {
                quantity: 0,
                price: 159,
            },
            filetOFishBurger: {
                quantity: 0,
                price: 175,
            },
        };

        state.subTotal = 0;
        state.tax = 0;
        state.shippingCharges = 0;
        state.total = 0;
    },
    addShippingInfo: (state, action) => {
        state.shippingInfo = {
            hNo: action.payload.hNo,
            city: action.payload.city,
            country: action.payload.country,
            state: action.payload.state,
            pinCode: action.payload.pinCode,
            phoneNo: action.payload.phoneNo
        }
    }
});


