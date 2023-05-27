import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';

import { Helmet } from 'react-helmet'
import Icon from 'react-eva-icons'
import '../../styles/index.scss'
import { useEffect, useState } from 'react';

import axios from 'axios'

const Works = () => {

    const [works, setWorks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(works);
    const [selectedCategory, setSelectedCategory] = useState('default');

    useEffect(() => {
        axios
          .get('http://api-portfolio-app.leo-graton.fr/works')
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
                <meta name="description" content="Description de ma page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Menu/>
            <main>
            <PageTitle 
            title='Works'
            descriptionPage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)'
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