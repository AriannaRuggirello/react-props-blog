

function getImgUrl(name) {
    return new URL('../assets/img/' + name, import.meta.url).href;
}

function PostListColors({ tags }) {
    const toReturn = [];
    const colorsMap = {
      "html": "bg-red-300",
      "css": "bg-yellow-300",
      "js": "bg-pink-300",
      "php": "bg-green-300",
    };
  
    tags.forEach((tag, i) => {
      const color = colorsMap[tag] ?? "bg-gray-100";
  
      toReturn.push(
        <span key={"tag" + i}
          className={"rounded-lg px-2 text-xs " + color}>
          {tag}
        </span>);
    });
  
    return toReturn;
  }

export default function PostCard({title, image, content, tags, published}){
    return  <div className="max-w-xs bg-zinc-50 shadow-lg rounded-lg overflow-hidden mx-auto mt-8 min-h-full ">
    <div className="aspect-video overflow-hidden group">
         <img src={getImgUrl(image)}
            alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out" />
    </div>
<div className="p-4 bg-zinc-50">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    {/* tags */}
    <div className="flex gap-2 flex-wrap">
    <PostListColors tags={tags}></PostListColors>
    </div>
    <p className="text-gray-600 mt-2">{content}</p>
    
</div>
</div>
}