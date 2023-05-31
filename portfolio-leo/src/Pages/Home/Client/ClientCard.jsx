import Icon from 'react-eva-icons'

import quote from '../../../assets/quote.svg'
import '../../../styles/index.scss'

const ClientCard = ({title, testimonial, imgClient, clientName, clientDescriptionName, iconCount}) => {

    const icons = [];

    for (let i=0; i < iconCount; i++) {
        icons.push(
            <Icon
                key={i}
                name="star"
                size="medium"
                fill="#CCA43B"
            />
        )
    }

    return (
        <div className='client-card'>
            <div>
                {icons}
            </div>
            <h3>{title}</h3>
            <div className='client-card-text'>
                <img src={quote} alt="" />
                <p className='p-margin'>{testimonial}</p>
            </div>
            <div className='client-card-info'>
            <div>
                <img src={imgClient} alt="" />
            </div>
            <div>
                <p>{clientName}</p>
                <span>{clientDescriptionName}</span>
            </div>
            </div>
        </div>
    )
};

export default ClientCard;