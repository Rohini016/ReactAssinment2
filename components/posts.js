import data from '../pages/api/data.json'
import Link from 'next/link'

const posts= ()=>(
    <>
        {
            data.map((item,index)=>{

                return<>

                    <div className="item mb-5">
                                <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="static/assets/images/blog/blog-post-thumb-5.jpg" alt="image"/>
                                <div className="media-body">
            <h3 className="title mb-1"><Link href="/posts/[id]" as={"/posts/"+item.id}>{item.title}</Link></h3>
                                    <div className="meta mb-1"><span className="date">Published 2 months ago</span></div>
            <div className="intro">{item.body}...</div>
                                    <Link className="more-link" href="/posts/[id]" as={"/posts/"+item.id}>Read more &rarr;</Link>
                                </div>
                                </div>
                        </div>

                </>

            })
           
        }
          
    </>
)

export default posts
  