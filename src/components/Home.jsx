import { useState } from 'react';
import React, { useEffect } from 'react'
import Coin from './Products'
import Loader from './Loader'
import axios from 'axios';

const Home = () => {
  // const arr = [1,2,3,4];

  // const [temp, setTemp] = useState(0);

  // useEffect(() => {
  //   console.log("Mounted");

  //   return () => {
  //     console.log("Unmounting");
  //   };
  // },[]);
  // This use-effect hits when the component in which it is present is rendered . It also has a dependency array by which also use-effect hits if entity present in the array is changed/modified.

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoins = async()=>{
      try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=1020");
        console.log(data);

        setCoins(data);
        setLoading(false);
      } catch (error) {
        alert("Not working");

      }
    };
    fetchAllCoins();
  }, [])
  
  
  return (
  <div className='home'>
    {/* <button onClick={() => setTemp(temp+1)}>Press</button> */}
    {/* {coins.map((i) => (
      <Coin name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image} price={i.current_price} />
    ))} */}

      {loading ? (
        <Loader />
      ) : (
        coins.map((i) => (
          <Coin
            name={i.name}
            symbol = {i.symbol}
            key = {i.id}
            imgSrc = {i.image}
            price = {i.current_price}
          />
        ))
      )}

  </div>
  );
};

export default Home