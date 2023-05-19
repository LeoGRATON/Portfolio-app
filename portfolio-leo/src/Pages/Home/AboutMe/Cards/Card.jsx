import Moreinfo from '../../../../Components/UI/Moreinfo';
import '../../../../styles/index.scss'

const Card = ({number, title, description}) => {

    return (
        <div className='card'>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <Moreinfo/>
        </div>
    )
};

export default Card;