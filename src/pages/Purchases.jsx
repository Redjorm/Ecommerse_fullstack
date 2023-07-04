import React, { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchase from "../components/Purchases/ProductPurchase";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  return (
    <div className='cart'>
      <h2 className='cart__title'>Purchases</h2>
      <div className='cart__container'>
        {
          purchases?.map((purchase) => (
            <ProductPurchase 
            key={purchase.id}
            prodPurchase={purchase}/>
          ))
        }
      </div>
    </div>
  );
};

export default Purchases;