import Menu from '../../Components/UI/Menu';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import PageTitle from '../../Components/PageTitle';
import Moreinfo from '../../Components/UI/Moreinfo'

import { Helmet } from 'react-helmet'

import '../../styles/index.scss'
import imgarticle from '../../assets/BLOG/img-article-1.png'

import { useEffect, useState } from 'react';
import axios from 'axios';


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [selectedCategory, setSelectedCategory] = useState('default');


    useEffect(() => {
        axios
          .get('http://api-portfolio-app.leo-graton.fr/blogs')
          .then(response => {
            setBlogs(response.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des travaux :', error);
          });
          const filtered = blogs.filter(blog =>
            (blog.titre.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
            (blog.category === selectedCategory || selectedCategory === 'default')
          );
          setFilteredBlogs(filtered);
      }, [searchTerm, blogs]);


    return (
        <>
            <Helmet>
                <title>Blog | LéoCreative Studio</title>
                <meta name="description" content="Description de ma page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Menu/>
            <main>
            <PageTitle 
            title='Blog'
            descriptionPage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ligula eget ligula sagittis, sed efficitur turpis egestas. Nam sed mi eleifend. (Poppins)'
            />
            <div className='blog-input taille-grille'>
                <div className='blog-input-content'>
                <label>
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
                <label>
                    Filtrer par catégorie :
                    <select 
                    type="text"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="default">-- Selectionner un catégorie --</option>
                        {blogs.map((blog) => (
                            <option value={blog.category} key={blog.id}>{blog.category}</option>
                        ))}
                    </select>
                </label>
                </div>
            </div>
            <div className='blog taille-grille'>
                {filteredBlogs.map((blog) => (
                    <div className='blog-cards' key={blog.id}>

                    <div className='blog-card'>
                        <div className='blog-card-img' style={{ backgroundImage: `url(${imgarticle})`}}>

                        </div>
                        <p className='categorie'>{blog.category}</p>
                        <h2>{blog.titre}</h2>
                        <p className='text'>{blog.text}</p>
                        <a href={`/blogs/${blog.titre}`}><Moreinfo/></a>
                    </div>
                    </div>
                ))}
            </div>
            </main>                
            <Footer/>
        </>
    )
};

export default Blogs;