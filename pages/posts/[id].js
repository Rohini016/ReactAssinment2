import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import Head from 'next/head'
import data from '../../pages/api/data.json'
import Link from 'next/link'
import Headers from '../../components/header' 

function postsBody({params,posttitle,postbody}){

    const router = useRouter()

    if(router.isFallback)
    {
        return <div>Loading</div>
    }

    return(

        <Layout>
            <Head>
                <title>{posttitle}</title>
               
            </Head>
            <Headers/>
            
  
            <div className="main-wrapper">
                    <article class="blog-post px-3 py-5 p-md-5">
                        <div class="container">
                            <header class="blog-post-header">
                        <h2 class="title mb-2">{posttitle}</h2>
                                        <div class="meta mb-3"><span class="date">Published 2 months ago</span></div>
                                    </header>
                        
                        <div class="blog-post-body">
                            <figure class="blog-banner">
                                <a href="/"><img class="img-fluid" src="../../static/assets/images/blog/reactmain.png" alt="image"/></a>
                               
                            </figure>
                            <p>{postbody}</p>
                             
                        </div>
                        
                        
                    </div>
                   </article>    
            </div> 
    </Layout>
    )
}

export async function getStaticProps({params}) 
{
   const idd = params.id;
   let posttitle,postbody;
    const pagedata = data.map((pdata)=>{
        if(pdata.id == idd){

            posttitle = pdata.title
            postbody = pdata.body
        }
    })


    return {props:{params,posttitle,postbody}}
  
}

export async function getStaticPaths(){

  
    const postsid = data;

    const paths = data.map((post) => ({
        params: { id: post.id.toString() },
      }))

      return { paths, fallback: false }

}


export default postsBody