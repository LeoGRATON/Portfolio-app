import AppearTextInBackground from '../Animation/AppearTextInBackground';
import OpacityText from '../Animation/OpacityText'
import './style.scss'

const PageTitle = ({title, descriptionPage}) => {

    return (
        <AppearTextInBackground className='page-title taille-grille'>
            <h1>{title}</h1>
            <OpacityText height='-100'>
            <p>{descriptionPage}</p>
            </OpacityText>
        </AppearTextInBackground>
    )
};

export default PageTitle;