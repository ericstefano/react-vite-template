import { useState } from 'react';

export const Button = ({ children, onClick, color = '#1982C4', ...props }) => {
  const [colorHandler, setColorHandler] = useState(color);

  const handleClick = () => {
    setColorHandler('#1F9DEC');
    onClick();
  };

  return (
    <button
      onMouseDown={handleClick}
      onMouseUp={() => setColorHandler(color)}
      onMouseOver={() => setColorHandler('#176DA3')}
      onMouseLeave={() => setColorHandler(color)}
      {...props}
      style={{
        backgroundColor: `${colorHandler}`,
        color: '#FFFFFF',
        border: 0,
        padding: '12px 18px',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '16px',
        borderRadius: '3px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
