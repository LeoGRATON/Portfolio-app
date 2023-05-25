import Moreinfo from '../../../../Components/UI/Moreinfo';
import { Link } from 'react-router-dom'
import '../../../../styles/index.scss'

const Card = ({number, title, description, url}) => {

    return (
        <div className='card'>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url}><Moreinfo/></a>
        </div>
    )
};

export default Card;