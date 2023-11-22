import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { ProductList } from '@nxreactsandbox/modules/products';
import { OrdersList } from '@nxreactsandbox/modules/orders';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrdersList />}></Route>
    </Routes>
  );
}

export default App;
