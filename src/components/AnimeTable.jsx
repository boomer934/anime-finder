export default function AnimeTable({ anime }) {
  if (!anime) return null;
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-4 font-serif m-2 pr-5">
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-black p-3">{anime.title_english}</h2>
        <img src={anime.images.jpg.image_url} alt={anime.title_english} />
      </div>
      <div className="flex flex-col justify-end mr-10">
        <table className="table-auto border-collapse w-full text-center">
          <tbody className="bg-slate-200">
            <tr>
              <td className="border border-black px-4 py-2">Score</td>
              <td className="border border-black px-4 py-2">{anime.score}</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Release year</td>
              <td className="border border-black px-4 py-2">{anime.year}</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Episodes</td>
              <td className="border border-black px-4 py-2">{anime.episodes}</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Status</td>
              <td className="border border-black px-4 py-2">{anime.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-span-2 mt-4 bg-slate-200 rounded-4xl ml-5 p-4 self-center">
        <h3 className="font-bold mb-1 text-xl">Plot</h3>
        <p className="text-[14px]">{anime.synopsis}</p>
      </div>
    </div>
  );
}
