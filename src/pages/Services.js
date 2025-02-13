import React, { useEffect, useState } from "react";

const API_URL = "https://strapi-ct.onrender.com/api/eventos";

const Services = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        mode: "cors", // Garante que o CORS está ativado
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Response Headers:", response.headers); // Debug
      console.log("Response Status:", response.status); // Debug
      console.log("Response Object:", response); // Debug
  
      if (!response.ok) {
        throw new Error("Erro ao buscar posts");
      }
  
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Lista de Eventos</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>
              {post.id}: {post.Titulo}
            </h3>
            <h2>{post.Data}</h2>
            <p>{post.Corpo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
