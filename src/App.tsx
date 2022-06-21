import { useState } from 'react';

import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export interface SelectedGenreIdProps {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>
      <Content selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>
    </div>
  );
}