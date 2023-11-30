import PostList from '../posts.json'

export default function Post(){
    return(
        <div className="mt-6 flex flex-wrap">
             {PostList.map((post, i) => 
            {  return <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="max-w-xs bg-zinc-50 shadow-lg rounded-lg overflow-hidden mx-auto mt-8 min-h-full ">
                    <div className=" h-64 bg-zinc-400 flex items-center justify-center">
                        <h1 className="text-4xl">600x400</h1>
                    </div>
                    <div className="p-4 bg-zinc-50">
                        <h2 className="text-xl font-semibold text-gray-800">{post.name}</h2>
                        {/* tags */}
                        <div className="flex gap-2 flex-wrap">
                        {post.tag.map((tag, i) => {
                        return <span key={"tag_" + i}
                            className="rounded-lg px-2 text-xs bg-orange-100">
                            {tag}
                        </span>;
                        })}
                        </div>
                        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis tempora adipisci voluptas ullam voluptatum exercitationem praesentium sunt ab nihil. Atque accusamus provident dolorum eligendi sed deserunt magni id neque.</p>
                        <div className="mt-4">
                        <a href="#" className="bg-yellow-500 text-white py-2 px-4 uppercase rounded-full ">LEGGI DI PIù</a>
                        </div>
                    </div>
                </div>
            </div>
            })}
        </div>



    )
}