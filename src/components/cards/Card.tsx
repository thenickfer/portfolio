import './Card.css';

type Data = {
    title: string,
    text: string,
    url: string,
    imageRef: string
}

const Card = (props: Data) => {
    return (
        <div className='card'>
            <img src={props.imageRef} alt={props.title} className='cardImg' />
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardText'>{props.text}</p>
            <a href={props.url} target='_blank' className='link'> Click to see more!</a>
        </div>
    )
};

export default Card;