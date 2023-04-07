import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='bg-blue-500 px-3 py-2 text-(white sm) rounded-md font-700 inline-flex gap-2 items-center'
    >
      {children}
    </button>
  );
};
