import Layout from '../components/Layout'
import Head from 'next/head'
import Posts from '../components/posts'
import Link from 'next/link'
import Headers from '../components/header'
  

export default function Home() {
  return (
  
    <Layout>
        <Head>
            <script type="text/javascript" src="static/assets/plugins/jquery-3.3.1.min.js"></script>
            <script type="text/javascript" src="static/assets/plugins/popper.min.js"></script> 
            <script type="text/javascript" src="static/assets/plugins/bootstrap/js/bootstrap.min.js"></script> 
            
      </Head>
    
  <Headers/>
  <div className="main-wrapper">
  
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
     
            <Posts></Posts>
         
      </div>
    </section>
     
  </div>  
  
  </Layout>
  )
}
