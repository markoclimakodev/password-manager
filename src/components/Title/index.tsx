import { ReactNode } from 'react';

type TitleProps = {
  title: string;
  type: 'h1' | 'h2';
  children?: ReactNode;
};
export function Title({ title, type, children = '' }: TitleProps) {
  return type === 'h1' ? (
    <h1 className="heading">{title}</h1>
  ) : (
    <h2 className="subheading">
      {title}
      {children}
    </h2>
  );
}
