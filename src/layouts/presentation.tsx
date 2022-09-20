import React from 'react';
import { graphql } from 'gatsby';

import { Deck } from '@presentations';
import useGlobals from '../hooks/use-globals';

export interface PresentationData {
  title: string;
  slug: string;
  date: string;
  width: number;
  height: number;
  fragmentsBySlide: number[];
}

export interface PresentationProps {
  location: {
    hash: string;
  };
  data: {
    presentation: PresentationData;
  };
}

export default function Presentation(props: React.PropsWithChildren<PresentationProps>) {
  return (
    <div className="w-screen h-screen relative">
      <Deck { ...props }/>
    </div>
  );
}

export function Head(props: PresentationProps) {
  useGlobals();
  return <>
    <title>{ `${props.data.presentation.title} | rodent.club` }</title>
  </>;
}

export const pageQuery = graphql`
  query($id: String!) {
    presentation(id: { eq: $id }) {
      title
      slug
      date
      width
      height
      fragmentsBySlide
    }
  }
`;
