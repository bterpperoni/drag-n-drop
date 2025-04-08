import React, { useState, useEffect } from 'react';
import { Preparation, PreparationType } from './components/Preparation';

function App() {
  const [preparations, setPreparations] = useState<PreparationType[]>([
    { id: 1, number: 1, preparateur: 1 },
    { id: 2, number: 2, preparateur: 1 },
    { id: 3, number: 3, preparateur: 1 },
    { id: 4, number: 4, preparateur: 2 },
    { id: 5, number: 5, preparateur: 2 },
    { id: 6, number: 6, preparateur: 2 },
  ]);
  const [draggedPreparationId, setDraggedPreparationId] = useState<number | null>(null);

  const transit = (preparationId: number, targetPreparateur: number) => {
    setPreparations(prev => 
      prev.map(prep => 
        prep.id === preparationId 
          ? { ...prep, preparateur: targetPreparateur }
          : prep
      )
    );
  };

  useEffect(() => {
    transit(1, 2);
  }, []);

  const preparateurs = Array.from(new Set(preparations.map(prep => prep.preparateur))).sort();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {preparateurs.map(preparateurId => (
          <div 
            key={preparateurId} 
            className="bg-white rounded-lg shadow-md p-6"
            onMouseUp={() => {
              if (draggedPreparationId !== null) {
                transit(draggedPreparationId, preparateurId);
                setDraggedPreparationId(null);
              }
            }}
          >
            <h2 className="text-xl font-semibold mb-4">préparateur {preparateurId}</h2>
            <div className="min-h-[100px]">
              {preparations
                .filter(prep => prep.preparateur === preparateurId)
                .map((prep) => (
                  <Preparation 
                    key={prep.id} 
                    preparation={prep}
                    onDragStart={() => setDraggedPreparationId(prep.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;