import { useState } from 'react';

const Layout = () => {
  const [count, setCount] = useState(0);
  return <h1 onClick={() => setCount(1)}>Hellow {count}</h1>;
};

export default Layout;
