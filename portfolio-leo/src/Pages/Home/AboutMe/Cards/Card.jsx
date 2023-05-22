import Moreinfo from '../../../../Components/UI/Moreinfo';
import '../../../../styles/index.scss'

const Card = ({number, title, description}) => {

    return (
        <div className='card'>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <Moreinfo/>
        </div>
    )
};

export default Card;