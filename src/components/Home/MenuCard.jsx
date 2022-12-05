import React from 'react'
import { motion } from 'framer-motion';

const MenuCard = ({ itemNum, burgerSrc, VegIcon, price, title, desc, handler }) => {
    const options = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 }
    }

    return (
        <motion.div className='menuCard' {...options} transition={{ delay: 0.3 }}>
            <div>
                {title}
                <img src={VegIcon} alt="veg" />
            </div>
            <main>
                <img src={burgerSrc} alt={itemNum} />
                <p>{desc}</p>
                <h5>₹ {price}</h5>
                <button onClick={() => handler(itemNum)}>Buy Now</button>
            </main>
        </motion.div>
    )
}

export default MenuCard