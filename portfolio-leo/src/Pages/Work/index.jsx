import '../../styles/index.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Menu from '../../Components/UI/Menu';
import PageTitle from '../../Components/PageTitle';
import WorkInfo from './WorkInfo';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Loading from '../../Components/UI/Loading';

const Work = () => {
  const { titre } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    axios
      .get('http://api-portfolio-app.leo-graton.fr/works')
      .then(response => {
        const foundWork = response.data.find(item => item.titre === titre);
        setWork(foundWork);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
      });
  }, [titre]);

  if (!work) {
    return <Loading/>; // Ajoutez un état de chargement pendant que les données sont récupérées
  }

  return (
    <div>
        <Menu/>
        <PageTitle 
            title={titre}
            descriptionPage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)'
        />
        <div className='work-info-cards'>
            <WorkInfo nomInfo='Client' children={work.titre}/>
            <WorkInfo nomInfo='Timeline' children={`${work.timeline}s`}/>
            <WorkInfo nomInfo='Website' children={work.website}/>
            <WorkInfo nomInfo='Category' children={work.category}/>
        </div>
        <div className='one-realistion taille-grille'>
            <div className='one-realistion-img' style={{ backgroundImage: `url(/src/assets/REALISATONS/${work.img_ref})`}}></div>
            <div className='one-realistion-presentation section-padding'>
                <div className='one-realistion-presentation-left'>
                    <h2>Présentation du projet</h2>
                    <p>{work.description}</p>
                </div>
                <div className='one-realistion-presentation-right'>
                    <div className='one-realistion-presentation-right-challenge'>
                    <h3>Le Challenge</h3>
                    <p>{work.challenge}</p>
                    </div>
                    <div className='one-realistion-presentation-right-goal'>
                    <h3>L'objectif</h3>
                    <p>{work.goal}</p>
                    </div>
                    <div className='one-realistion-presentation-right-result'>
                    <h3>Le resultat</h3>
                    <p>{work.result}</p>
                    </div>
                </div>
            </div>
            <div className='filigrane'>
                <h2>Maquette</h2>
            </div>
        </div>
        <div className='one-realistion-maquette'>
            <div className='one-realistion-maquette-img'>
            <img src={`/src/assets/REALISATONS/MAQUETTES/${work.img_maquette}`} alt="" />
            </div>
        </div>
        <div className='one-realistion-couleurs taille-grille'>
            <div className='one-realistion-couleurs-left' >
            <div className='one-realistion-couleurs-left-one' style={{ backgroundColor: `${work.couleurs.couleur1.hex}`}}>
            {work.couleurs.couleur1.nom}<br/>
            {work.couleurs.couleur1.hex}
            </div>
            <div className='one-realistion-couleurs-left-one' style={{ backgroundColor: `${work.couleurs.couleur2.hex}`}}>
            {work.couleurs.couleur2.nom}<br/>
            {work.couleurs.couleur2.hex}
            </div>
            <div className='one-realistion-couleurs-left-one' style={{ backgroundColor: `${work.couleurs.couleur3.hex}`}}>
            {work.couleurs.couleur3.nom}<br/>
            {work.couleurs.couleur3.hex}
            </div>
            <div className='one-realistion-couleurs-left-one' style={{ backgroundColor: `${work.couleurs.couleur4.hex}`}}>
            {work.couleurs.couleur4.nom}<br/>
            {work.couleurs.couleur4.hex}
            </div>
            </div>
            <div className='one-realistion-couleurs-right'>
                <div>
                    <p>{work.typo1}</p>
                    <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890 !$&)ç((-</span>
                </div>
                <div>
                    <p>{work.typo2}</p>
                    <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890 !$&)ç((-</span>
                </div>
            </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default Work;