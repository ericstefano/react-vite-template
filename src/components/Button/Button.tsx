import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type ButtonVariants = 'primary' | 'secondary';

const variants: Record<ButtonVariants, string> = {
  primary: 'bg-red-500',
  secondary: 'bg-green-500',
};

type ButtonProps = { variant?: ButtonVariants } & ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={clsx(variants[variant])} {...props}>
      {children}
    </button>
  );
};
