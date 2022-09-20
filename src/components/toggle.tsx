import React from 'react';

type HTMLButton = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>, 
  HTMLButtonElement
>;

interface ToggleProps extends HTMLButton {
  on: boolean;
  onLogo?: React.ReactNode,
  offLogo?: React.ReactNode,
}

export default function Toggle({ on, onLogo, offLogo, ...props }: ToggleProps) {
  return (
    <button { ...props }>
      <div 
        className={
          `flex flex-row relative 
          ${ on ? 'child:last:left-4 child:hover:last:left-3.5' : 'child:last:left-0 child:hover:last:left-0.5' }
        `}>
        <div className={`
          w-12 h-8 border rounded-full 
          bg-neutral-300  bg-gradient-to-r from-neutral-300 to-neutral-200
          border-neutral-900/50
          bg-slate-700 dark:from-slate-600 dark:to-slate-700
          dark:bg-slate-700 dark:border-slate-400/50
        `}/>
        <div className={ `
          transition-all duration-250
          border border-neutral-900/25 dark:border-slate-400/25
          flex absolute rounded-full w-8 h-8 bg-neutral-200 dark:bg-slate-500 scale-[80%]
        `}>
          { on ? onLogo : offLogo }
        </div>
      </div>
    </button>
  );
}
