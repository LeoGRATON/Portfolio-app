import '../../styles/index.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import Menu from '../../Components/UI/Menu';
import PageTitle from '../../Components/PageTitle';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import Loading from '../../Components/UI/Loading';
import Cursor from '../../Components/UI/Cursor';
import WorkInfo from '../Work/WorkInfo';
import { ToastContainer } from 'react-toastify';


const Article = (content) => {
  const { titre } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get('https://api-portfolio-app.leo-graton.fr/blogs')
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

  const htmlString = `${blog.text}`
  const date = new Date(blog.date_creation);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <>
        <Helmet>
                <title>{titre} | LéoCreative Studio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
        </Helmet>
        <ToastContainer/>
        <Cursor/>
        <Menu/>
        <main>
        <PageTitle 
            title={titre}
        />
        <div className='div-blog-img' style={{ backgroundImage: `url(/src/assets/BLOG/${blog.img_ref})`}}>
        </div>
        <div className='div-blog-info taille-grille'>
          <WorkInfo nomInfo='Auteur' children={blog.author} />
          <WorkInfo nomInfo='Catégorie' children={blog.category} />
          <WorkInfo nomInfo='Date' children={formattedDate} />
        </div>
        <div className='div-blog-content taille-grille'>
          {ReactHtmlParser(htmlString)}
        </div>
        <Contact/>
        </main>
        <Footer/>
    </>
  );
};

export default Article;