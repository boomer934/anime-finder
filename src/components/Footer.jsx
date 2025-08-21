
export default function Footer({anime}){
    return (
        <>
            <footer className=" h-[50px] bg-gray-800 flex flex-row items-center justify-center">
                <a href={anime.url} className="text-white active:text-gray-400 cursor-pointer"> link to My anime list</a>
            </footer>
        </>
    )
}