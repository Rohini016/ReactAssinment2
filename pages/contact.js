import Head from 'next/head'
import Layout from '../components/Layout'
import Headers from '../components/header'

 function Contact() {
    return(
        <Layout>
          
              <Head>

                  <title>Contact</title>
              </Head>

            <Headers></Headers>
            <div className="main-wrapper">
                   <div>Contact Page</div>
            </div> 
      </Layout>
    )
}
 
export default Contact