import React from 'react';

import { useDeck } from '@presentations';

import useKeyboardShortcuts from './use-keyboard-shortcuts';
import { updateClass } from '../utils/themes';

export default function useGlobals() {
  // update theme styling based on localStorage
  React.useEffect(updateClass, []);
  
  // reset the deck state whenever starting a new page
  const reset = useDeck(deck => deck.reset);
  React.useEffect(reset, [reset]);

  // global keyboard shortcuts
  useKeyboardShortcuts();
}
