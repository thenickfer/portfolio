import Card from '../../components/cards/Card.tsx';
import './Work.css';
import { useState } from 'react';

import CC from "../../assets/currency-converter.png";
import Calc from "../../assets/Calculator.png";

import Planet from '../../components/planet/Planet.tsx';

import { motion, AnimatePresence } from 'framer-motion';

import { DiCss3, DiHtml5, DiJsBadge, /* DiNodejsSmall, DiJava */ } from 'react-icons/di'

type previousPage = {
    previous: string
}

const Work = (props: previousPage) => {

    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
    const [selectedCard, setSelectedCard] = useState<any>(null);

    const handleToggle = (index: number) => {
        if (openCardIndex === index) {
            setOpenCardIndex(null);
            setSelectedCard(null);
        } else {
            setOpenCardIndex(index);
            setSelectedCard(cardsData[index]);
        }
    };

    const cardsData = [
        {
            title: "Currency Converter",
            text: "The Currency Converter project is a web application developed as part of the AGES study group's second sprint. It integrates multiple APIs to fetch real-time currency exchange rates, including the Frankfurter, AwesomeAPI, and FlagsAPI for flag icons. The project allows users to easily convert currencies by selecting different options, and it's a practical example of API handling and front-end development.",
            url: "https://github.com/thenickfer/Currency-Converter",
            imageRef: CC,
            icons: [DiHtml5, DiCss3, DiJsBadge]
        },
        {
            title: "Scientific Calculator",
            text: "This project is a simple calculator application developed in Python. It features basic arithmetic operations like addition, subtraction, multiplication, and division. It also includes a scientific mode with more advanced functions like square root, power, and trigonometric operations. This was my first project in HTML, CSS, and JavaScript, and it was a great learning experience.",
            url: "https://github.com/thenickfer/Calculator",
            imageRef: Calc,
            icons: [DiHtml5, DiCss3, DiJsBadge]
        },

    ];

    return (
        <div className="work">
            <motion.div className='cardContainer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}>
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        text={card.text}
                        url={card.url}
                        imageRef={card.imageRef}
                        icons={card.icons}
                        isOpen={openCardIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </motion.div>

            <AnimatePresence>
                {(openCardIndex != null) && selectedCard && (
                    <motion.div className='expandedCard' id='expandedCard'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                        exit={{ opacity: 0 }}
                        onClick={() => handleToggle(openCardIndex)} >
                        <div className='imgContainer'>
                            <img src={selectedCard.imageRef} alt={selectedCard.title} className='openCardImg' />
                        </div>
                        <h2>{selectedCard.title}</h2>
                        <p style={{ padding: "0 5%" }} >{selectedCard.text}</p>
                        <p className='link'>
                            You can view the full project <a href={selectedCard.url} target='_blank'>here</a>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div className='planetDiv'
                initial={{ marginLeft: window.innerWidth > 680 ? (props.previous == 'About' ? 0 : "-100vw") : '0' }}
                animate={{ marginLeft: 0 }}
                transition={{ duration: 2.2, type: "spring", ease: "easeIn" }}>
                <Planet />
            </motion.div>
        </div>
    )
};

export default Work;