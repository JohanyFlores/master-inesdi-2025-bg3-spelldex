// src/app.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ClassView from './pages/classview';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:className" element={<ClassView />} />
    </Routes>
  );
}

