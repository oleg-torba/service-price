import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Pages/Home/Home';
import { Price } from './Pages/Home/Price/Price';
export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="price" element={<Price />} />
    <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
  );
};
