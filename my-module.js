


import axios from "axios";

const getData = async (id) =>{
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`); // users'dan gelen id bilgisine göre data gelecek
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`) // posts'dan gelen id bilgisine göre data gelecek

    console.log("User'dan gelen",user)
    console.log("Post'dan Gelen",post)
}

export default getData;