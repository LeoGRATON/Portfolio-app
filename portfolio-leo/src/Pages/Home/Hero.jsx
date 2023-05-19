import '../../styles/index.scss'
import imgLeo from '../../assets/img-leo.png'

const Hero = () => {

    return (
        <div className='hero'>
            <div>
                <img src={imgLeo} alt="" />
            </div>
            <h1>Web designer<br/><span>& Developer</span></h1>
        </div>
    )
};

export default Hero;