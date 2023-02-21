import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  color?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  color = '#1E8FD5',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: color,
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
