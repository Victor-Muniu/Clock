import React,{useEffect, useState} from 'react'
import Filter from '../component/Filter';
import Form from '../component/Form';

function Transaction() {
  const [transactions, setTransactions]=useState([]);
  useEffect(() =>{
    fetch("http://localhost:3000/transactions")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setTransactions(data)
    })
  }, []);
  return (
    <>
      <Form/>
      {transactions && <Filter data={transactions}/>}
    </>
  )
}

export default Transaction
