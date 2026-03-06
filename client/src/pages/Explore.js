import { useEffect, useState } from "react";
import { getTrendingAnime, searchAnime } from "../services/animeService";
import { addAnime } from "../services/watchlistService";

function Explore() {

  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchAnime = async () => {

      try {

        const res = await getTrendingAnime();

        let anime = [];

        if (Array.isArray(res.data)) {
          anime = res.data;
        } 
        else if (Array.isArray(res.data.data)) {
          anime = res.data.data;
        } 
        else if (Array.isArray(res.data.data?.data)) {
          anime = res.data.data.data;
        }

        setAnimeList(anime);

      } catch (err) {

        console.error("Error fetching anime:", err);

      } finally {

        setLoading(false);

      }

    };

    fetchAnime();

  }, []);


  const handleSearch = async () => {

    if (!search) return;

    try {

      const res = await searchAnime(search);

      let anime = [];

      if (Array.isArray(res.data)) {
        anime = res.data;
      } 
      else if (Array.isArray(res.data.data)) {
        anime = res.data.data;
      } 
      else if (Array.isArray(res.data.data?.data)) {
        anime = res.data.data.data;
      }

      setAnimeList(anime);

    } catch (err) {

      console.error(err);

    }

  };


  const handleAdd = async (anime) => {

    try {

      await addAnime({
        title: anime.title,
        image: anime.images?.jpg?.image_url,
        totalEpisodes: anime.episodes || 0
      });

      alert("Added to watchlist");

    } catch (err) {

      console.error(err);
      alert("Failed to add");

    }

  };


  if (loading) {
    return <h2>Loading anime...</h2>;
  }


  return (

    <div style={{ padding: "20px" }}>

      <h1>Trending Anime</h1>

      <div style={{ marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>


      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>

        {animeList.length === 0 && (
          <p>No anime found.</p>
        )}

        {animeList.map((anime) => (

          <div
            key={anime.mal_id}
            style={{
              width: "200px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px"
            }}
          >

            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
              style={{ width: "100%" }}
            />

            <h4>{anime.title}</h4>

            <button onClick={() => handleAdd(anime)}>
              Add to Watchlist
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Explore;