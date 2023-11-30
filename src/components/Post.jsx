import PostList from '../posts.json';
import PostCard from './PostCard';




export default function Post(){
    return(
        <div className="mt-6 flex flex-wrap">
             {PostList.map((post, i) => 
            {  if (post.published)
                return <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
   
               <PostCard
                title={ post.title}
                image={ post.image }
                content={ post.content}
                tags={ post.tags }
                published={ post.published }/>
         
            </div>
            })}
        </div>

          
    



    )
}