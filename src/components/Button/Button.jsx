import { useState } from 'react';

export const Button = ({ children, onClick, color = '#1E8FD5', ...props }) => {
  const [colorHandler, setColorHandler] = useState(color);

  const handleClick = () => {
    setColorHandler('#1F9DEC');
    onClick();
  };

  const handleMouseOver = () => {
    setColorHandler('#176DA3');
  };

  const handleMouseOut = () => {
    setColorHandler(color);
  };

  return (
    <button
      onMouseDown={handleClick}
      onMouseUp={() => setColorHandler('#176DA3')}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
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
