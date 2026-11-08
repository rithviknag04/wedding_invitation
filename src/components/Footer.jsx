import React from 'react';
import { weddingInfo } from '../data/weddingData';

export default function Footer() {
  return (
    <footer>
      {weddingInfo.bride} & {weddingInfo.groom}, 14 February 2027
    </footer>
  );
}

