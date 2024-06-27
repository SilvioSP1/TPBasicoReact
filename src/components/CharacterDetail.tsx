// src/components/CharacterDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-20 bg-tertiary h-screen'>
      <div className="w-4/12 rounded overflow-hidden shadow-xl m-auto bg-white rounded-3xl border-2 border-primary">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full" src={character.image} alt={character.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{character.name}</div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">Especie: {character.species}</p>
            <p className="mt-2 text-gray-500">Estado: {character.status}</p>
            <p className="mt-2 text-gray-500">Género: {character.gender}</p>
            <p className="mt-2 text-gray-500">Origen: {character.origin.name}</p>
            <p className="mt-2 text-gray-500">Ubicación: {character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
