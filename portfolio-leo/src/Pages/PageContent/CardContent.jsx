import '../../styles/index.scss'

import Icon from 'react-eva-icons'

const CardContent = ({iconName, h3Title, h3Text}) => {

  return (
    <div className='page-content-text-card'>
        <Icon
            name={iconName}
            size="xlarge"     // small, medium, large, xlarge
            fill="#fff"
        />
        <h3>{h3Title}</h3>
        <p>{h3Text}</p>
    </div>
  );
};

export default CardContent;