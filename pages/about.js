import Head from 'next/head'
import Layout from '../components/Layout'
import Headers from '../components/header'

 function about() {
    return(
        <Layout>
          
              <Head>

                  <title>About Page </title>
              </Head>

            <Headers></Headers>
            <div className="main-wrapper">
                   <div>About Page</div>
            </div> 
      </Layout>
    )
}

export default about