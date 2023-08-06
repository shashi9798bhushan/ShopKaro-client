import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Helmet} from "react-helmet";
import  {Toaster} from 'react-hot-toast';

function Layout({children,title,description,keywords,author}) {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />               
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author} />
                <title>{title}</title> 
        </Helmet>

        <Header/>
        <main style = {{minHeight:"70vh"}}>
           <Toaster/>
            {children}
        </main>
        <Footer/>
        
    </div>
  )
}

Layout.defaultProps = {
  title:'Online Bazaar',
  description:'mern stack project',
  keywords:'mern,react,node,mongodb',
  authot:'Silent&Co',
}

export default Layout