import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const apiKey = process.env.REACT_APP_API_HOST;
const Home = () =>{
    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(apiKey);

useEffect(() =>{
  setLoading(false);
    fetch (apiKey)
    .then((response) => response.json()) 
  //.then((json) => console.log(json))
  .then((json) => setName((json)));
 //JSON.stringify
}, []);
return(
    <div>
<div className="bg-green-500 pt-20 pb-20">
  
<h1 className="ml-10">test123</h1>
</div>
<div className="container mx-auto p-4">
<div class="grid grid-cols-3 grid-rows-2 gap-4 pt-4">
  {
    
  }
  
</div>
</div>
</div>
)

}


export default Home;