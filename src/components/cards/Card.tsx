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
    isOpen: boolean,
    onToggle: () => void
}

const Card = (props: Data) => {
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
        <div className={/* isOpen ? 'card isOpen' : */ 'card'} onClick={props.onToggle}>

            <div className={/* isOpen ? 'cover isOpen' : */ 'cover'}>
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
            <img src={props.imageRef} alt={props.title} className={/* isOpen ? 'cardImg isOpen' : */ 'cardImg'} />


        </div>

    )
};
export default Card;