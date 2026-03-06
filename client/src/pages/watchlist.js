import { useEffect, useState } from "react";
import { getWatchlist, deleteAnime } from "../services/watchlistService";

function Watchlist() {

  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // REMOVE FUNCTION
  const handleRemove = async (id) => {

    try {

      await deleteAnime(id);

      setWatchlist(prev =>
        prev.filter(anime => anime.id !== id)
      );

    } catch (err) {

      console.error("Failed to remove anime", err);

    }

  };

  useEffect(() => {

    const fetchWatchlist = async () => {

      try {

        const res = await getWatchlist();

        console.log("Watchlist API:", res.data);

        const data = res.data?.data || res.data || [];

        setWatchlist(data);

      } catch (err) {

        console.error("Failed to load watchlist", err);

      } finally {

        setLoading(false);

      }

    };

    fetchWatchlist();

  }, []);

  if (loading) {
    return <h2>Loading watchlist...</h2>;
  }

  return (

    <div style={{ padding: "20px" }}>

      <h1>Your Watchlist</h1>

      {watchlist.length === 0 && (
        <p>No anime in watchlist.</p>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        {watchlist.map((anime) => (

          <div
            key={anime.id}
            style={{
              width: "200px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px"
            }}
          >

            <img
              src={anime.image}
              alt={anime.title}
              style={{ width: "100%" }}
            />

            <h4>{anime.title}</h4>

            <p>Total Episodes: {anime.totalEpisodes}</p>

            <button
              onClick={() => handleRemove(anime.id)}
              style={{
                marginTop: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Watchlist;