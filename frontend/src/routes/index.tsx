import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';
// import AddTransactionPage from '../pages/AddTransaction';

import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/add-transaction" element={<AddTransactionPage />} /> */}
    </RouteList>
  </BrowserRouter>
);
