"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Product } from "../common/types/page";
import { fetchData } from "../services/product.services";
import UpdateItem from "../components/updateitem/page";
import AddItem from "../components/additem/page";

const ProductList = () => {
  const [productList, setProductList] = useState<Product[] | undefined>([]);

  const fetch = async () => {
    let respondedList = await fetchData();
    setProductList(respondedList);
  };

  const addedItem = (item:Product) => {
    setProductList([item,...productList!]);
  }

  const DeleteId = (id: number) => {
    let newList = productList?.filter((list) => list.id !== id);
    setProductList(newList);
  };

  const Updated = (data:Product) => {
    console.log(data);
    let newlist = productList?.map ((list) => list.id === data.id ? data : list);
    setProductList(newlist);
  }

  useEffect(function () {
    fetch();
  }, []);

  return (
    <div>
       
        <div className="flex items-center justify-center font-extrabold text-5xl" >Product List</div>
        <div className='flex items-center justify-center'>
        <AddItem  add={addedItem}/>
        </div>
      {productList?.map((productList, index) => {
        return (
          <div key={index} className=" space-y-4">
            <div className="w-2/5 m-auto text-black p-3 shadow-lg rounded-xl">
              <div className="bg-white p-5 flex flex-row items-center space-x-5 ">
                <div><Image src={productList.thumbnail} height={150} width={150} alt={""}/></div>
                <div className=" flex-grow">
                  <div className=" font-extrabold">{productList.title}</div>
                  <div className=" font-semibold">{productList.brand}</div>
                  <div>{productList.description}</div>
                  <div className="flex flex-auto items-center justify-center text-left">
                    <div className="flex-auto"><span className=" font-semibold">Price: </span>${productList.price}</div>
                    <div className="flex-auto"><span className=" font-semibold">Discount: </span>{productList.discountPercentage}%</div>
                    <div className="flex-auto"><span className=" font-semibold">Available Stock: </span>{productList.stock}</div>
                  </div>
                  <div><span className=" font-semibold">Rating: </span>{productList.rating}</div>
                  <div><span className=" font-semibold">Category: </span>{productList.category}</div>
                  <div className="flex flex-row space-x-2 pt-4">
                    <UpdateItem id={productList.id} title={productList.title} brand={productList.brand} desc={productList.description} price={productList.price} discount={productList.discountPercentage} stock={productList.stock} category={productList.category} update={Updated}  />
                    <button className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white" onClick={() => DeleteId(productList.id)}>
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
