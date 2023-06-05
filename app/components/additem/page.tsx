"use client";
import { Product } from "@/app/common/types/page";
import { Add, Update } from "@/app/services/product.services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddItem = (props:any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ mode: "all" });
  const [modal, setModal] = useState(false);

  const onSubmit = async (data: Product) => {
    let res = await Add(
      data.title,
      data.description,
      data.price,
      data.discountPercentage,
      data.stock,
      data.brand,
      data.category,
      data.thumbnail
    );
    setModal(!modal)
    props.add(res);
  };
  return (
    <div>
      <button
        onClick={() => setModal(!modal)}
        className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white"
      >
        Add Item
      </button>
      {modal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <h3 className="text-3xl font-semibold items-center justify-center">
                Add Product
              </h3>
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex flex-col">
                    <label>Title:</label>
                    <input
                      {...register("title", {
                        required: { value: true, message: "Title is required" },
                      })}
                      type="text"
                      className=" border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.title?.message}
                  </div>
                  <div className="flex flex-col">
                    <label>Description:</label>
                    <input
                      {...register("description", {
                        required: {
                          value: true,
                          message: "Description is required",
                        },
                      })}
                      type="textarea"
                      className=" border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.description?.message}
                  </div>
                  <div className="flex flex-col">
                    <label>Price:</label>
                    <input
                      {...register("price", {
                        required: { value: true, message: "Price is required" },
                      })}
                      type="text"
                      className="  border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.price?.message}
                  </div>
                  <div className="flex flex-col">
                    <label>Discount Percentage:</label>
                    <input
                      {...register("discountPercentage", {
                        required: {
                          value: true,
                          message: "Discount Percentage is required",
                        },
                      })}
                      type="text"
                      className=" border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.discountPercentage?.message}
                  </div>
                  <div className="flex flex-col">
                    <label>Stock:</label>
                    <input
                      {...register("stock", {
                        required: { value: true, message: "Stock is required" },
                      })}
                      type="text"
                      className=" border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.stock?.message}
                  </div>
                  <div className="flex flex-col">
                    <label> Brand:</label>
                    <input
                      {...register("brand", {
                        required: { value: true, message: "Brand is required" },
                      })}
                      type="text"
                      className=" border-2 border-gray-500 rounded-md outline-none"
                    />
                    {errors.brand?.message}
                  </div>
                  <div className="flex flex-col">
                    <label>Category:</label>
                    <select
                      {...register("category", { required: true })}
                      name="category"
                      className=" border-2 border-gray-500"
                      defaultValue="smartphones"
                    >
                      <option value="smartphones">Smartphones</option>
                      <option value="laptops">Laptops</option>
                      <option value="fragrances">Fragrances</option>
                      <option value="skincare">Skincare</option>
                      <option value="groceries">Groceries</option>
                      <option value="home-decoration">Home-decoration</option>
                      <option value="furniture">Furniture</option>
                      <option value="tops">Tops</option>
                      <option value="womens-dresses">Womens-dresses</option>
                      <option value="womens-shoes">Womens-shoes</option>
                      <option value="womens-watches">Womens-watches</option>
                      <option value="womens-bags">Womens-bags</option>
                      <option value="womens-jewellery">Womens-jewellery</option>
                      <option value="mens-shirts">Mens-shirts</option>
                      <option value="mens-shoes">Mens-shoes</option>
                      <option value="mens-watches">Mens-watches</option>
                      <option value="mens-shirts">Mens-shirts</option>
                      <option value="sunglasses">sunglasses</option>
                      <option value="automotive">Automotive</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="lighting">Lighting</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label>Picture:</label>
                    <input
                      {...register("thumbnail")}
                      type="file"
                    />
                  </div>
                  <div className="flex flex-row space-x-2 items-center justify-center">
                  <button className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white">
                    Add Item
                  </button>
                  <button onClick={()=>setModal(!modal)} className=" bg-violet-400 rounded-md py-1 px-3 hover:bg-violet-500 hover:text-white">
                    Close
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddItem;
