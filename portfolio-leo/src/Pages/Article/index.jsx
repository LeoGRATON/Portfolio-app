import '../../styles/index.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Menu from '../../Components/UI/Menu';
import PageTitle from '../../Components/PageTitle';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Loading from '../../Components/UI/Loading';
import Cursor from '../../Components/UI/Cursor';


const Work = () => {
  const { titre } = useParams();
  const [blog, setBlog] = useState(null);

const formatedText = titre.replace(/\./g, '').toLowerCase();
const finalTitle = formatedText.replace(/\s/g, "-");

console.log(finalTitle)

  useEffect(() => {
    axios
      .get('http://api-portfolio-app.leo-graton.fr/blogs')
      .then(response => {
        const foundBlog = response.data.find(item => item.titre === titre);
        setBlog(foundBlog);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
      });
  }, [titre]);

  if (!blog) {
    return <Loading/>; // Ajoutez un état de chargement pendant que les données sont récupérées
  }

  return (
    <>
        <Helmet>
                <title>{titre} | LéoCreative Studio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
        </Helmet>
        <Cursor/>
        <Menu/>
        <main>
        <PageTitle 
            title={titre}
        />
        <p>{blog.titre}</p>
        <Contact/>
        </main>
        <Footer/>
    </>
  );
};

export default Work;