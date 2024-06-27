// src/components/CharacterList.tsx
import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import useRickAndMortyApi from '../hooks/usePagination';

const CharacterList: React.FC = () => {
  const [count, setCount] = useState<number>(5);
  const { characters, loading, error, setPage } = useRickAndMortyApi(count);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Personajes de Rick and Morty</h1>
      <div className='grid grid-cols-12'>
        <div className='flex items-center justify-center'>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium 
            text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 
            group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
            dark:focus:ring-blue-800" 
            onClick={() => setPage(prev => prev + 1)}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Recargar
            </span>
          </button>
        </div>
        
        <div className='flex items-center justify-center'>
          <select id="underline_select" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-20
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500 text-center"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            >
          {[5, 10, 15, 20].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-1 sm:grid-cols-1">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default CharacterList;
