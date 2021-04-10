import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="square"
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
