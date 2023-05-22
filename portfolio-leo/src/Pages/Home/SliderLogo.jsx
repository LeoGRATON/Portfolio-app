import '../../styles/index.scss'

const SliderLogo = () => {

    const image = 'src/assets/HOME/slider-logo'

    return (
        <div className='slider-logo taille-grille section-padding'>
                <img src={`${image}/logo-github.png`} alt="" />
                <img src={`${image}/logo-wordpress.png`} alt="" />
                <img src={`${image}/logo-figma.png`} alt="" />
                <img src={`${image}/logo-react.png`} alt="" />
                <img src={`${image}/logo-adobe.png`} alt="" />
        </div>
    )
};

export default SliderLogo;