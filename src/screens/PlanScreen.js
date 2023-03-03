import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import './PlanScreen.css'



function PlanScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      db.collection("products").where("active", "==", true )
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            priceSnap.docs.forEach((price) => {
                products[productDoc.id].prices = {
                    priceId: price.id,
                    priceData: price.data(),
                };
            });
        });
        setProducts(products)
      })
    }, [])
    // console.log(products)



  return (

    <div className='planScreen'>PlanScreen</div>
  )
}

export default PlanScreen

