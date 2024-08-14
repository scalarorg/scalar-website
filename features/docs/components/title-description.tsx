import React from 'react';

type Props = {
  text: string;
};

export const TitleDescription = ({ text }: Props) => {
  return <p className="text-lg">{text}</p>;
};
