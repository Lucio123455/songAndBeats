import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/dbConnection.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner.jsx';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import AddBeatForm from '../AddBeatForm/AddBeatForm.jsx';
import Destacado from '../Destacado/Destacado.jsx';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "productos");

    const q = categoryId 
      ? query(productsCollection, where('category', '==', categoryId))
      : productsCollection;

    getDocs(q).then(({ docs }) => {
      const prodFromDocs = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(prodFromDocs);
      setLoading(false);
    }).catch((error) => {
      console.error("ERROR", error);
      setLoading(false);
    });
  }, [categoryId]);

  const titleToShow = categoryId ? `Category: ${categoryId}` : "All Products";

  return (
    <main>
      <div className="container"> 
        {loading 
          ? (
            <div className="spinner-container">
              <Spinner />
            </div>
          ) 
          : (
            <div className="product-list">
              <ItemList products={products} />
            </div>
          ) 
        }
        <div>
        <Destacado />
        </div>
        <div className="form-container">
          <AddBeatForm />
        </div>
      </div>
    </main>
  );
};

export default ItemListContainer;





