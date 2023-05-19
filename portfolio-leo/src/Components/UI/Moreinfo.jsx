import './style.scss'
import Icon from 'react-eva-icons';

const Moreinfo = ({className, onClick, children}) => {

    return (
        <button className={`more-info-btn ${className}`} onClick={onClick}>
            <Icon 
                name="arrow-forward-outline"
                size="medium"     // small, medium, large, xlarge
                fill="#fff"
                animation={{
                    type: "flip",  // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false 
                  }}
            />
        </button>
    )
};

export default Moreinfo;