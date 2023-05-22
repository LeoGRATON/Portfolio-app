
import './style.scss'

const CardCV = ({nom, imglogo, titleName, description, className}) => {

    return (
        <div className={`card-cv ${className}`}>
            <div>
                <div className='card-cv-name'>
                    <h2>{nom}</h2>
                    <span>{nom}</span>
                </div>
                <div className='card-cv-card'>
                    <img src={imglogo} alt="" />
                    <h3>{titleName}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};

export default CardCV;