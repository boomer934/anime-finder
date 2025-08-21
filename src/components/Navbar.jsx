import { useEffect, useState } from "react"
import "../../style.css"
function NavBar(){
    const [name , setName] = useState("")
    const [anime,setAnime] = useState([])

    function handleClick(){
        if(name){
            fetch(`https://api.jikan.moe/v4/anime?type=tv&q=${name}`)
            .then(response => response.json())
            .then(data => {
                const json = data.data.filter((obj)=> obj.title_english !== null && obj.title_english.toLowerCase().replace(" ","") === name.toLowerCase().replace(" ",""))
                setAnime(json)
                setName("")
                console.log(anime);
            })
            .catch(error => {
                console.log(error);
            });
        }
       
    }

    return(
        <>
            <nav className="bg-black h-[80px] flex flex-row items-center font-bold pl-6 text-2xl font-serif">
                <h1 className="text-white">
                    Movie Finder
                </h1>
                <input 
                type="text"
                placeholder="Nome Anime..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className=" ml-auto mr-2 bg-white rounded-full w-[150px] h-[40px] placeholder:text-sm focus:outline-0  pl-3" 
                />
                <button
                onClick={()=>handleClick()} 
                className="text-gray-500 text-sm p-2 mr-5 bg-white rounded-4xl">
                    search
                </button>
            </nav>
            <div className=" p-4 bg-amber-500">
                {anime.length>=1 ?(
                        <>  
                            <div className=" grid grid-flow-row grid-cols-1">
                                <h2 
                                className=" text-center text-black p-3">
                                    {anime[0].title_english}
                                </h2>
                                <img src={anime[0].images.jpg.image_url} alt="immagine anime" />
                            </div>
                        </>
                    ):(
                        <>
                        
                        </>
                    )
                }
            </div>
        </>
    )
}
export default NavBar