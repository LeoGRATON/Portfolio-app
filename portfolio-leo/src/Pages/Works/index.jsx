import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';

import {Link} from 'react-router-dom'
import Icon from 'react-eva-icons'
import '../../styles/index.scss'
import { useEffect, useState } from 'react';

import axios from 'axios'

const Works = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios
          .get('http://api-portfolio-app.leo-graton.fr/works')
          .then(response => {
            setWorks(response.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
          });
      }, []);

    return (
        <div>
            <Menu/>
            <PageTitle 
            title='Works'
            descriptionPage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)'
            />
             <div className='blog-input taille-grille'>
                <div className='blog-input-content'>
                <label htmlFor="">
                    Rechercher un article :
                    <input type="text" placeholder='Rechercher'/>
                </label>
                </div>
                <div className='blog-input-content'>
                <label htmlFor="">
                    Filtrer par catégorie :
                    <select type="text">
                        <option value="default">-- Selectionner un catégorie --</option>
                        {works.map((work) => (
                            <option value="default">{work.category}</option>
                        ))}
                    </select>
                </label>
                </div>
            </div>
            <div className='works taille-grille'>
                <div className='works-cards section-padding'>
                {works.map((work) => (
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
            <Footer/>
        </div>
    )
};

export default Works;