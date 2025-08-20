import { useEffect, useState } from "react"
import "../../style.css"
function NavBar(){
    const [film , setFilm] = useState("")

    async function handleClick(){
       fetch('https://api.jikan.moe/v4/anime?type=movie')
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0].mal_id);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return(
        <>
            <nav className="bg-black h-[80px] flex flex-row items-center font-bold pl-6 text-2xl font-serif">
                <h1 className="text-white">
                    Movie Finder
                </h1>
                <input 
                type="text"
                placeholder="Nome film..."
                value={film}
                onChange={(e)=>setFilm(e.target.value)}
                className=" mr-2 bg-white rounded-full w-[150px] h-[40px] placeholder:text-sm focus:outline-0  pl-3" 
                />
                <button
                onClick={()=>handleClick()} 
                className="text-gray-500 text-sm p-2 mr-5 bg-white rounded-4xl">
                    search
                </button>
            </nav>
            <div>
                {film ?(
                        <>  
                            <div>{film.adult}</div>
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