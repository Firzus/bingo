'use client';

import { useState, useEffect } from 'react';

// Data
import observations from '@data/data.jsx';

export default function Board() {
  const numbers = Array.from({ length: observations.length }, (_, i) => i + 1);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [activeNumbers, setActiveNumbers] = useState({});

  useEffect(() => {
    setSelectedNumbers(selectRandomNumbers());
  }, []);

  function selectRandomNumbers() {
    const shuffled = [...numbers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 16);
  }

  function toggleNumber(num) {
    setActiveNumbers(prevState => ({
      ...prevState,
      [num]: !prevState[num]
    }));
  }

  return (
    <main className="max-w-5xl w-full flex m-auto gap-8">
      <section className="bg-gray-900 grow flex flex-col p-8 gap-8 rounded shadow-2xl">
        <h2 className="text-gray-50 text-3xl font-semibold">
          Liste des observations
        </h2>
        <ul className="list-inside list-decimal">
          {observations.map((observation, index) => (
            <li key={index} className="text-sm text-gray-200">
              {observation}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-900 flex flex-col justify-between p-8 rounded shadow-2xl">
        <h1 className="text-gray-50 uppercase text-8xl text-center font-bold tracking-widest">
          Bingo
        </h1>
        <ul className="grid gap-4 grid-cols-4 aspect-square">
          {selectedNumbers.map((num, index) => (
            <button key={index} className={`flex rounded-lg w-28 h-28 shadow-xl ${activeNumbers[num] ? 'bg-teal-700' : 'bg-gray-800'}`} onClick={() => toggleNumber(num)}>
              <p className="text-gray-200 text-2xl text-center m-auto">
                {num}
              </p>
            </button>
          ))}
        </ul>
      </section>
    </main>
  );
}