import React from 'react'
import { motion } from 'framer-motion';
// import me from '../../assets/founder.webp';
import me from '../../assets/founder.jpg';

const Founder = () => {
    const options = {
        initial: { opacity: 0, x: "-100%" },
        whileInView: { opacity: 1, x: 0 },
    }

    return (
        <section className='founder'>
            <motion.div
                {...options}
            >
                <img src={me} alt="Founder" height={200} width={200} />
                <h3>Tushar Verma</h3>
                <p>Hey, Everyone I am Tushar Verma, the founder of B.Tech Burger Wala.
                    <br />
                    Our mission is to provide the best burgers in the world. We are working hard to make it happen.
                </p>

            </motion.div>
        </section>
    )
}

export default Founder