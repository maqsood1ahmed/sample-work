import React from 'react';
import { getSnapshot } from 'mobx-state-tree';
import './App.css';
import { useMst } from "./models/Root";

//test category
const Category = () => {
  const { category } = useMst();
  const categories = category && getSnapshot(category);

  return (<ul>
    {categories?.items.length>0 && categories.items.map(c=><li key={c.id}>{c.name}</li>)}
  </ul>);
};

function App() {
  return (
      <>
        <h1>Categories</h1>
        <Category />
      </>
  );
}

export default App;