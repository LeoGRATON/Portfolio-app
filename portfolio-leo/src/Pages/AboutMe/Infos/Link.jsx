import Icon from 'react-eva-icons'
import './style.scss'

const Link = ({nom, pseudo}) => {

    return (
        <div className='link-about'> 
            <div className='link-about-icon'>
            <a href="#">
            <Icon 
                name="link-2-outline"
                size="medium"     // small, medium, large, xlarge
                fill="#fff"
                animation={{
                    type: "zoom",  // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false 
                  }}
            />
            </a>
            </div>
            <div className='link-about-infos'>
                <p className='link-about-infos-nom'>{nom}</p>
                <p>{pseudo}</p>
            </div>
        </div>
    )
};

export default Link;