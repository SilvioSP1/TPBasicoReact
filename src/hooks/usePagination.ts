// src/hooks/useRickAndMortyApi.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
}

const useRickAndMortyApi = (count: number) => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
        params: { page }
      });
      setAllCharacters([...allCharacters, ...response.data.results]);
      setCharacters(prevCharacters => [
        ...prevCharacters,
        ...response.data.results.slice(0, count - prevCharacters.length)
      ]);
      setLoading(false);
      return response;
    } catch (error) {
      setError('Error fetching characters');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1);
  }, [page]);

  useEffect(() => {
    setCharacters(allCharacters.slice(0, count));
  }, [count, allCharacters]);

  /*useEffect(() => {
    if (characters.length < count) {
      fetchCharacters(page);
    }
  }, [page]);*/

  return { characters, loading, error, setPage };
};

export default useRickAndMortyApi;
