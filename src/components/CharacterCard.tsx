// src/components/CharacterCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CharacterProps {
  character: {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
  };
}

const CharacterCard: React.FC<CharacterProps> = ({ character }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className="max-w-xs overflow-hidden shadow-xl m-4 bg-secondary rounded-xl border-2 border-primary">
        <Link to={`/character/${character.id}`}>
          <img className="w-full img-fluid" src={character.image} alt={character.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{character.name}</div>
            <p className="text-base text-white">Especie: {character.species}</p>
            <p className="text-base text-white">Estado: {character.status}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
