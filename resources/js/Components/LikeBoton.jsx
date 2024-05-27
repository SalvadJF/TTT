import React, { useState, useEffect } from "react";
import axios from "axios";
import { setCookie, getCookie, eraseCookie } from "@/Utils/cookieUtils";

export default function LikeBoton({ articuloId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const liked = getCookie(`liked_articulo_${articuloId}`);
    if (liked) {
      setHasLiked(true);
    }
  }, [articuloId]);

  const handleLikeClick = async () => {
    try {
      let response;
      if (hasLiked) {
        response = await axios.post(`/articulos/${articuloId}/decrementarLikes`);
        setLikes(response.data.likes);
        setHasLiked(false);
        eraseCookie(`liked_articulo_${articuloId}`);
      } else {
        response = await axios.post(`/articulos/${articuloId}/incrementarLikes`);
        setLikes(response.data.likes);
        setHasLiked(true);
        setCookie(`liked_articulo_${articuloId}`, true, 365);
      }
    } catch (error) {
      console.error("Error al actualizar los likes:", error);
    }
  };

  return (
    <div className="flex items-center mr-3">
      <button onClick={handleLikeClick} className="focus:outline-none">
        {hasLiked ? (
          <svg
            className="w-6 h-6 text-red-600 fill-current"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.414l1.318-1.096a4.5 4.5 0 016.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        )}
      </button>
      <span className="ml-2">{likes}</span>
    </div>
  );
}
