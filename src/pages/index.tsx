import React from 'react';
import { graphql, Link } from 'gatsby';

import useGlobals from '../hooks/use-globals';

interface LayoutProps {
  data: {
    allPresentation: {
      nodes: Presentation[];
    };
  };
};

interface Presentation {
  date: string;
  slug: string;
  title: string;
  description: string | null;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full p-8 grid">
        {
          props.data.allPresentation.nodes.map(
            presentation => <PresentationBlock key={ presentation.slug } { ...presentation } />
          )
        }
      </div>
    </div>
  );
}

function PresentationBlock(presentation: Presentation) {
  return (
    <Link 
      className="
        m-4 border hover:no-underline active:no-underline bg-neutral-100 border-stone-700 
        hover:bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-900 dark:hover:bg-neutral-700 
        hover:scale-105 focus:scale-105" 
      to={ presentation.slug }>
      <div className="flex flex-row p-4">
        <div className="flex-1 grow-[1]">
          <div className="underline text-fuchsia-900 dark:text-fuchsia-300">{ presentation.title }</div>
          <div>{ (new Date(presentation.date)).toISOString().slice(0, 10) }</div>
        </div>
        { 
          presentation.description 
          && (
            <div className="
              grow-[2] ml-4 text-neutral-800 dark:text-slate-300 no-underline 
              focus:no-underline hover:no-underline active:no-underline">
              { presentation.description }
            </div>
          )
        }
      </div>
    </Link>
  );
}

export const query = graphql`
  query {
    allPresentation(sort: {fields: date, order: DESC}) {
      nodes {
        date
        slug
        title
        description
      }
    }
  }
`;

export function Head() {
  useGlobals();
  return <>
    <title>{ `Presentations | rodent.club` }</title>
  </>;
}
