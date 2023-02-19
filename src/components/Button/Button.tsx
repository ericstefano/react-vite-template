import { ComponentPropsWithoutRef, MouseEvent, useState } from 'react';

type ButtonProps = {
  color?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, onClick, color = '#1E8FD5', ...props }: ButtonProps) => {
  const [colorHandler, setColorHandler] = useState(color);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setColorHandler('#1F9DEC');
    if (onClick !== undefined) {
      onClick(event);
    }
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
