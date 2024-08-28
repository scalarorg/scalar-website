import { ReactNode } from 'react';

type Props = {
  items?: string[];
  children?: ReactNode;
};

export const SubList = ({ items, children }: Props) => {
  return (
    <ul className="list-[circle] pl-6 [&>li]:my-2">
      {items?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{item}</li>
      ))}
      {children}
    </ul>
  );
};
