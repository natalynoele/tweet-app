import { Routes, Route } from 'react-router-dom';
import {HomePage} from '../../pages/HomePage'
import { TweetsPage } from '../../pages/TweetsPage';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}


