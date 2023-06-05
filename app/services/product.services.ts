import axios from "axios"

export async function fetchData(){
    try{
    let response = await axios.get('https://dummyjson.com/products')
    return response.data.products;
    }catch(errors){
        console.log("Errors:"+errors);
    }
}

export async function Update(id:number,title:string,description:string,price:number,discountPercentage:number,stock:number,brand:string,category:string,thumbnail:string){
try{
    let response = await axios.put('https://dummyjson.com/products/'+id,{
        title,description,price,discountPercentage,stock,brand,category,thumbnail
    },{
        headers:{
            'Content-Type': 'application/json'   
        }
    })
    // console.log(response.data);
    return response.data;
}catch(errors){
    console.log("Errors:"+errors);
}
}

export async function Add(title:string,description:string,price:number,discountPercentage:number,stock:number,brand:string,category:string,thumbnail:string) {
    try{
        let response = await axios.post('https://dummyjson.com/products/add',{
            title,description,price,discountPercentage,stock,brand,category,thumbnail
        },{
            headers:{
                'Content-Type': 'application/json'   
            }
        })
        // console.log(response.data);
        return response.data;
    }catch(errors){
        console.log("Errors:"+errors);
    }
}

export async function loginResponse(username:string,password:string){
    try{
        let response = await axios.post('https://dummyjson.com/auth/login',{
            username,
            password
        },{
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data;
    }catch(errors){
        console.log("Errors:"+errors);
    }
}