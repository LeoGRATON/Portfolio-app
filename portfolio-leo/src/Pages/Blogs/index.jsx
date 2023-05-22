import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';
import Moreinfo from '../../Components/UI/Moreinfo'

import '../../styles/index.scss'
import imgarticle from '../../assets/BLOG/img-article-1.png'

import { useEffect, useState } from 'react';
import axios from 'axios';


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
          .get('http://api-portfolio-app.leo-graton.fr/blogs')
          .then(response => {
            setBlogs(response.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
          });
      }, []);

    return (
        <div>
            <Menu/>
            <PageTitle 
            title='Blog'
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
                    </select>
                </label>
                </div>
            </div>
            <div className='blog taille-grille'>
                {blogs.map((blog) => (
                    <div className='blog-cards' key={blog.id}>
                    <div className='blog-card'>
                        <img src={imgarticle} alt="" />
                        <p className='categorie'>{blog.category}</p>
                        <h2>{blog.titre}</h2>
                        <p className='text'>{blog.text}</p>
                        <Moreinfo/>
                    </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
};

export default Blogs;