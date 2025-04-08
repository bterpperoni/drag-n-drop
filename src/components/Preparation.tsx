import React from 'react';

export interface PreparationType {
  id: number;
  number: number;
  preparateur: number;
}

interface PreparationProps {
  preparation: PreparationType;
  onDragStart: () => void;
}

export function Preparation({ preparation, onDragStart }: PreparationProps) {
  return (
    <div 
      className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-3 cursor-move select-none hover:bg-gray-100 transition-colors"
      onMouseDown={onDragStart}
    >
      <span className="text-gray-700">
        préparation {preparation.number}
      </span>
    </div>
  );
}