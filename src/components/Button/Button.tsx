import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  color?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className='bg-blue-500 px-3 py-2 text-(white sm) rounded-md font-700 inline-flex gap-2 items-center'
    >
      <div className='i-twemoji-grinning-face-with-smiling-eyes h-4 w-4' />
      {children}
    </button>
  );
};
