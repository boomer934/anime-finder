import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AnimeTable from "./components/AnimeTable";
import Footer from "./components/Footer";

export default function App() {
  const [name, setName] = useState("");
  const [anime, setAnime] = useState(null);

  const handleSearch = () => {
    if (!name) return;
    fetch(`https://api.jikan.moe/v4/anime?type=tv&q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.data.find(
          (obj) =>
            obj.title_english &&
            obj.title_english.toLowerCase().replace(/\s+/g, "") ===
              name.toLowerCase().replace(/\s+/g, "")
        );
        console.log(filtered)
        setAnime(filtered || null);
        setName("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <SearchBar name={name} setName={setName} onSearch={handleSearch} />
      {anime && <AnimeTable anime={anime} />}
      {anime && <Footer anime={anime}></Footer>}
    </div>
  );
}