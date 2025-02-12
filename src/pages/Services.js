import React, { useEffect, useState } from "react";

const API_URL = "http://vps54038.publiccloud.com.br:1337/api/eventos";

const Services = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}?pagination[page]=${page}&pagination[pageSize]=5&sort=createdAt:desc`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar posts");
      }

      const data = await response.json();
      setPosts(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
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
              {post.Titulo} - {post.Data}
            </h3>
            <p>{post.Corpo}</p>
          </li>
        ))}
      </ul>

      {/* Controles de Paginação */}
      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || loading}
        >
          Anterior
        </button>
        <span>
          Página {page} de {pageCount}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
          disabled={page === pageCount || loading}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Services;
