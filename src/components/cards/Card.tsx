import { IconType } from 'react-icons';
import './Card.css';
import { useEffect, useState } from 'react';

import { IconContext } from "react-icons";


type Data = {
    title: string,
    text: string,
    url: string,
    imageRef: string,
    icons: Array<IconType>
}

const Card = (props: Data) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        setIsLightMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsLightMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (

        <div className={isOpen ? 'card isOpen' : 'card'}
            data-isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}>
            <div className={isOpen ? 'cover isOpen' : 'cover'}>
                <h2 className='cardTitle'>{props.title}</h2>
                <div className="miniLogos">
                    {
                        props.icons.map((Icon) => (
                            <IconContext.Provider value={{ color: isLightMode ? "#F6228E" : "cyan", className: "miniIcon" }} >
                                <Icon />
                            </IconContext.Provider>
                        ))
                    }
                </div>
            </div>
            <img src={props.imageRef} alt={props.title} className={isOpen ? 'cardImg isOpen' : 'cardImg'} />

            <p className='cardText'>{props.text}</p>
            <a href={props.url} target='_blank' className='link'> Click to see more!</a>
        </div>
    )
};
export default Card;