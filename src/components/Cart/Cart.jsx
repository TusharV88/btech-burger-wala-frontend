import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import burger1 from '../../assets/vegBurgers/burger1.png'
import burger2 from '../../assets/vegBurgers/burger2.png'
import burger3 from '../../assets/vegBurgers/burger3.png'
import burger4 from '../../assets/vegBurgers/burger4.png'
import burger5 from '../../assets/vegBurgers/burger5.png'
import burger6 from '../../assets/nonVegBurgers/burger1.png'
import burger7 from '../../assets/nonVegBurgers/burger2.png'
import burger8 from '../../assets/nonVegBurgers/burger3.png'
import burger9 from '../../assets/nonVegBurgers/burger4.png'
import burger10 from '../../assets/nonVegBurgers/burger5.png'


const CartItem = ({ value, title, img, increment, decrement, burgerClass = 'veg' }) => (
  <div className={`cartItem ${burgerClass}`}>
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" value={value} readOnly />
      <button onClick={increment}>+</button>
    </div>
  </div>
);


const Cart = () => {
  const { cartItems: {
    alooTikkiBurger: { quantity: alooTikkiBurger },
    mexicanAlooTikkiBurger: { quantity: mexicanAlooTikkiBurger },
    cornAndCheeseBurger: { quantity: cornAndCheeseBurger },
    veggieBurger: { quantity: veggieBurger },
    spicyPannerBurger: { quantity: spicyPannerBurger },
    masalaEggBurger: { quantity: masalaEggBurger },
    chickenKebabBurger: { quantity: chickenKebabBurger },
    chickenBurger: { quantity: chickenBurger },
    grilledChickenAndCheeseBurger: { quantity: grilledChickenAndCheeseBurger },
    filetOFishBurger: { quantity: filetOFishBurger },
  },
    subTotal,
    tax,
    shippingCharges,
    total,

  } = useSelector(state => state.cart);

  const { cartItems: orderItems } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: 'alooTikkiBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 2:
        dispatch({ type: 'mexicanAlooTikkiBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 3:
        dispatch({ type: 'cornAndCheeseBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 4:
        dispatch({ type: 'veggieBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 5:
        dispatch({ type: 'spicyPannerBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 6:
        dispatch({ type: 'masalaEggBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 7:
        dispatch({ type: 'chickenKebabBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 8:
        dispatch({ type: 'chickenBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 9:
        dispatch({ type: 'grilledChickenAndCheeseBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 10:
        dispatch({ type: 'filetOFishBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      default:
        dispatch({ type: 'alooTikkiBurgerIncrement' });
        dispatch({ type: 'calculatePrice' });
        break;
    };
  };


  const decrement = (item) => {
    switch (item) {
      case 1:
        if (alooTikkiBurger === 0) break;
        dispatch({ type: 'alooTikkiBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 2:
        if (mexicanAlooTikkiBurger === 0) break;
        dispatch({ type: 'mexicanAlooTikkiBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 3:
        if (cornAndCheeseBurger === 0) break;
        dispatch({ type: 'cornAndCheeseBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 4:
        if (veggieBurger === 0) break;
        dispatch({ type: 'veggieBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 5:
        if (spicyPannerBurger === 0) break;
        dispatch({ type: 'spicyPannerBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 6:
        if (masalaEggBurger === 0) break;
        dispatch({ type: 'masalaEggBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 7:
        if (chickenKebabBurger === 0) break;
        dispatch({ type: 'chickenKebabBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 8:
        if (chickenBurger === 0) break;
        dispatch({ type: 'chickenBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 9:
        if (grilledChickenAndCheeseBurger === 0) break;
        dispatch({ type: 'grilledChickenAndCheeseBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      case 10:
        if (filetOFishBurger === 0) break;
        dispatch({ type: 'filetOFishBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
      default:
        if (alooTikkiBurger === 0) break;
        dispatch({ type: 'alooTikkiBurgerDecrement' });
        dispatch({ type: 'calculatePrice' });
        break;
    };
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem("cartPrices", JSON.stringify({
      subTotal,
      tax,
      shippingCharges,
      total,
    }));
  }, [orderItems, subTotal, tax, shippingCharges, total,])


  return (
    <section className='cart'>
      <main>
        <CartItem
          title="Aloo Tikki Burger (Veg) "
          img={burger1}
          value={alooTikkiBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title="Mexican Aloo Tikki Burger (Veg) "
          img={burger2}
          value={mexicanAlooTikkiBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title="Corn & Cheese Burger (Veg) "
          img={burger3}
          value={cornAndCheeseBurger}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title="Veggie Burger (Veg) "
          img={burger4}
          value={veggieBurger}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          title="Spicy Panner Burger (Veg) "
          img={burger5}
          value={spicyPannerBurger}
          increment={() => increment(5)}
          decrement={() => decrement(5)}
        />
        <CartItem
          burgerClass='non-veg'
          title="Masala Egg Burger (Non-Veg) "
          img={burger6}
          value={masalaEggBurger}
          increment={() => increment(6)}
          decrement={() => decrement(6)}
        />
        <CartItem
          burgerClass='non-veg'
          title="Chicken Kebab Burger (Non-Veg) "
          img={burger7}
          value={chickenKebabBurger}
          increment={() => increment(7)}
          decrement={() => decrement(7)}
        />
        <CartItem
          burgerClass='non-veg'
          title="Chicken Burger (Non-Veg) "
          img={burger8}
          value={chickenBurger}
          increment={() => increment(8)}
          decrement={() => decrement(8)}
        />
        <CartItem
          burgerClass='non-veg'
          title="Grilled Chicken & Cheese Burger (Non-Veg) "
          img={burger9}
          value={grilledChickenAndCheeseBurger}
          increment={() => increment(9)}
          decrement={() => decrement(9)}
        />
        <CartItem
          burgerClass='non-veg'
          title="Filet-O-Fish Burger (Non-Veg) "
          img={burger10}
          value={filetOFishBurger}
          increment={() => increment(10)}
          decrement={() => decrement(10)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹ {subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹ {tax}</p>
          </div>
          <div>
            <h4>Delivery Charges</h4>
            <p>₹ {shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹ {total}</p>
          </div>
          <div>
            <Link to='/shipping'>Checkout</Link>
          </div>
        </article>
      </main>
    </section>
  )
}

export default Cart