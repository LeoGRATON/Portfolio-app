import './style.scss'

const PageTitle = ({title, descriptionPage}) => {

    return (
        <div className='page-title taille-grille'>
            <h1>{title}</h1>
            <p>{descriptionPage}</p>
        </div>
    )
};

export default PageTitle;