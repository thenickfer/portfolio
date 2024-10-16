import Card from '../../components/cards/Card.tsx';
import './Work.css';

import CC from "../../assets/currency-converter.png";
import Planet from '../../components/planet/Planet.tsx';

import { motion } from 'framer-motion';

import { DiCss3, DiHtml5, DiJsBadge, /* DiNodejsSmall, DiJava */ } from 'react-icons/di'


const Work = () => {
    return (
        <div className="work">
            <motion.div className='cardContainer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}>
                <Card title="Currency Converter" text="Card Text" url="https://github.com/thenickfer/Currency-Converter" imageRef={CC} icons={[DiHtml5, DiCss3, DiJsBadge]} />
                <Card title="Scientific Calculator" text="Card Text" url="https://www.google.com" imageRef="" icons={[DiHtml5, DiCss3, DiJsBadge]} />
                <Card title="" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
                <Card title="Card Title" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
                <Card title="Card Title" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
                <Card title="Card Title" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
                <Card title="Card Title" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
                <Card title="Card Title" text="Card Text" url="https://www.google.com" imageRef="" icons={[]} />
            </motion.div>
            <motion.div className='planetDiv'
                initial={{ marginLeft: window.innerWidth > 680 ? "-100vw" : 0 }}
                animate={{ marginLeft: 0 }}
                transition={{ duration: 2.2, type: "spring", ease: "easeIn" }}>
                <Planet />
            </motion.div>
        </div>
    )
};

export default Work;