export default function SearchBar({ name, setName, onSearch }) {
  return (
    <div className="flex items-center justify-center p-2">
        <div>
            <input
            type="text"
            placeholder="Anime name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-auto mr-2 bg-slate-300 rounded-full w-[150px] h-[40px] placeholder:text-sm focus:outline-0 pl-3"
            />
            <button
            onClick={onSearch}
            className="text-slate-200 text-sm p-2 mr-5 bg-slate-400 rounded-4xl active:scale-110 transition-transform duration-100">
                Search
            </button>
        </div>
    </div>
      
  );
}