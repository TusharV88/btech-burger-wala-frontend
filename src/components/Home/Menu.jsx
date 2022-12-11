import React from 'react'
import MenuCard from './MenuCard'
import { motion } from 'framer-motion';
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
import VegIcon from '../../assets/veg-icon.jpg'
import NonVegIcon from '../../assets/nonveg.svg'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "alooTikkiBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Aloo Tikki Burger added to cart");
        break;
      case 2:
        dispatch({ type: "mexicanAlooTikkiBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Mexican Aloo Tikki Burger added to cart");
        break;
      case 3:
        dispatch({ type: "cornAndCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("corn And Cheese Burger added to cart");
        break;

      case 4:
        dispatch({ type: "veggieBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("veggie Burger added to cart");
        break;

      case 5:
        dispatch({ type: "spicyPannerBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Spicy Panner Burger added to cart");
        break;

      case 6:
        dispatch({ type: "masalaEggBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Masala Egg Burger added to cart");
        break;

      case 7:
        dispatch({ type: "chickenKebabBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Chicken Kebab Burger added to cart");
        break;

      case 8:
        dispatch({ type: "chickenBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Chicken Burger added to cart");
        break;

      case 9:
        dispatch({ type: "grilledChickenAndCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Grilled Chicken and Cheese Burger added to cart");
        break;

      case 10:
        dispatch({ type: "filetOFishBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Filet-O-Fish Burger added to cart");
        break;

      default:
        dispatch({ type: "alooTikkiBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Aloo Tikki Burger added to cart");
        break;
    }
  };


  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 }
  }

  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div className='cards-heading'>
        <motion.h2 className='burger-header' {...options}>Veg-Burgers</motion.h2>
        <motion.span {...options} transition={{ delay: 0.3 }}></motion.span>
      </div>
      <div className='cards'>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          VegIcon={VegIcon}
          price={58}
          title="Aloo Tikki Burger"
          desc="The World's favourite Indian burger! Crunchy potato and peas patty with delicious Tom Mayo & crunchy onions; now with Whole Wheat Bun."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          VegIcon={VegIcon}
          price={69}
          title="Mexican Aloo Tikki Burger"
          desc="A burger with a fusion of international tastes- your favourite aloo tikki patty, layered with shredded onion, jalapeno, served with delicious Chipotle sauce"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          VegIcon={VegIcon}
          price={145}
          title="Corn & Cheese Burger"
          desc="Corn and Cheese Burger is a burger with crispy corn & cheese patty, covered with a slice of cheese, creamy cocktail sauce, jalapenos and shredded onions. Corn and Cheese Burger was formerly known as American Cheese Supreme Veg."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={4}
          burgerSrc={burger4}
          VegIcon={VegIcon}
          price={145}
          title="Veggie Burger"
          desc="An everyday classic burger with a delectable patty filled with potatoes, carrots and tasty Indian spices; topped with crunchy lettuce and mayonaise."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={5}
          burgerSrc={burger5}
          VegIcon={VegIcon}
          price={189}
          title="Spicy Panner Burger"
          desc="Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more."
          handler={addToCartHandler}
        />
      </div>
      <div className='cards-heading nonveg-header'>
        <motion.h2 className='burger-header' {...options}>NonVeg-Burgers</motion.h2>
        <motion.span className='red-bar' {...options} transition={{ delay: 0.3 }} ></motion.span>
      </div>
      <div className='cards'>
        <MenuCard
          itemNum={6}
          burgerSrc={burger6}
          VegIcon={NonVegIcon}
          price={65}
          title="Masala Egg Burger"
          desc="Get your protein fix with the Masala Egg Burger- steamed egg patty, topped with spicy masala seasoning, onions and habanero sauce."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={7}
          burgerSrc={burger7}
          VegIcon={NonVegIcon}
          price={105}
          title="Chicken Kebab Burger"
          desc="A flavourful burger with a chicken kebab patty combined with tangy rassam sauce and shredded onions."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={8}
          burgerSrc={burger8}
          VegIcon={NonVegIcon}
          price={131}
          title="Chicken Burger"
          desc="Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={9}
          burgerSrc={burger9}
          VegIcon={NonVegIcon}
          price={159}
          title="Grilled Chicken & Cheese Burger"
          desc="Grilled Chicken and Cheese Burger is a burger with grilled chicken patty covered with a slice of cheese, a dollop of spicy habanero sauce, jalapenos and shredded onions. Grilled Chicken and Cheese Burger was formerly known as American Cheese Supreme Chicken."
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={10}
          burgerSrc={burger10}
          VegIcon={NonVegIcon}
          price={175}
          title="Filet-O-Fish Burger"
          desc="Signature fish filet patty, perfectly balanced with a sharp flavour of tartar sauce, a thin slice of cheese served between steamed buns."
          handler={addToCartHandler}
        />
      </div>
    </section>
  )
}

export default Menu