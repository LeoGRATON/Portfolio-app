import SlideUpFadeIn from '../../Components/Animation/SlidenUpFadeIn';
import '../../styles/index.scss'

import Icon from 'react-eva-icons'

const CardContent = ({iconName, h3Title, h3Text}) => {

  return (
    <SlideUpFadeIn height={1000} className='page-content-text-card'>

        <Icon
            name={iconName}
            size="xlarge"     // small, medium, large, xlarge
            fill="#fff"
        />
        <h3>{h3Title}</h3>
        <p>{h3Text}</p>
    </SlideUpFadeIn>
  );
};

export default CardContent;