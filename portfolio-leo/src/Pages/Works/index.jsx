import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';
import Cursor from '../../Components/UI/Cursor';

import { Helmet } from 'react-helmet'
import Icon from 'react-eva-icons'
import '../../styles/index.scss'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import axios from 'axios'

const Works = () => {

    const [works, setWorks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(works);
    const [selectedCategory, setSelectedCategory] = useState('default');

    useEffect(() => {
        axios
          .get('https://api-portfolio-app.leo-graton.fr/works')
          .then(response => {
            setWorks(response.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
          });
          const filtered = works.filter(work =>
            (work.titre.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
            (work.category === selectedCategory || selectedCategory === 'default')
          );
          setFilteredBlogs(filtered);
      }, [searchTerm, works]);

    return (
        <>
            <Helmet>
                <title>Mes réalisations | LéoCreative Studio</title>
                <meta name="description" content="Découvrez mes réalisations dans le domaine du webdesign et du développement web. Parcourez ma galerie pour voir des exemples de sites web que j'ai pu créer. Obtenez de l'inspiration et trouvez des idées pour votre prochain projet. Contactez-moi pour discuter de vos besoins en matière de conception et de développement web." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <ToastContainer/>
            <Cursor/>
            <Menu/>
            <main>
            <PageTitle 
            title='Mes réalisations'
            descriptionPage='Explorez mes réalisations ! Découvrez mon portfolio inspirant et voyez notre expertise en action. Soyez inspiré par mes projets et imaginez les possibilités pour votre propre vision. Bienvenue dans ma galerie de réalisations !'
            />
             <div className='blog-input taille-grille'>
                <div className='blog-input-content'>
                <label htmlFor="">
                    Rechercher un article :
                    <input
                    type="text"
                    placeholder='Rechercher'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
                </div>
                <div className='blog-input-content'>
                <label htmlFor="">
                    Filtrer par catégorie :
                    <select
                    type="text"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="default">-- Selectionner un catégorie --</option>
                        {works.map((work) => (
                            <option value={work.category} key={work.id}>{work.category}</option>
                        ))}
                    </select>
                </label>
                </div>
            </div>
            <div className='works taille-grille'>
                <div className='works-cards section-padding'>
                {filteredBlogs.map((work) => (
                    <a href={`/works/${work.titre}`} className='works-card' key={work.id} style={{ backgroundImage: `url(src/assets/REALISATONS/${work.img_ref})`}}>
                        <div className='works-card-infos'>
                        <h2>{work.titre}</h2>
                        <div className='works-card-infos-right'>
                            <div className='works-card-infos-right-icon'>
                            <Icon 
                                name="heart"
                                size="medium"     // small, medium, large, xlarge
                                fill="#CCA43B"
                            />
                                <span>{work.likes}</span>
                            </div>
                            <p>{work.category}</p>
                        </div>
                        </div>  
                    </a>
                ))}
                </div>
            </div>
            <Contact/>
            </main>
            <Footer/>
        </>
    )
};

export default Works;