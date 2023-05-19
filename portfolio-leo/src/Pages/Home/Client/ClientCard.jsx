import '../../../styles/index.scss'

const ClientCard = ({imgSrc, title, testimonial, imgClient, clientName, clientDescriptionName}) => {

    return (
        <div className='client-card'>
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <p>{testimonial}</p>
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