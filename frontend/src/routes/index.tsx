import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import AddTransactionPage from '../pages/Transactions';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/transaction" element={<AddTransactionPage />} />
    </RouteList>
  </BrowserRouter>
);
