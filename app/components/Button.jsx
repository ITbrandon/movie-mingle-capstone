import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button 
      className="text-white bg-orange-600 rounded-lg font-serif p-2 hover:bg-orange-800 duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;