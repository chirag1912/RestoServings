import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurants.js";
import Dish from "./components/DishServings.js"
import Data from "./Data.json";

const API_URL =
  "https://yudiz-solution.s3.ap-south-1.amazonaws.com/dishes.json";
const URL = "https://restcountries.eu/rest/v2/all";

function App() {
  const [meal, setMeal] = useState(undefined);

  const data=Data;
  // useEffect(async()=>{
  //   const res=await fetch(API_URL);
  //   const meal=await res[0].json();
  //   setMeal(meal);
  // },[]);  //Error being Shown: Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

  useEffect(() => {
    fetch(URL)
      .then(function (res) {
        return res;
      })

      .then((res) => setMeal(res));
  }, []);

  if (!meal) return null;

  // const abc=()=><Restaurant/>
  

  return (
    <div className="App container col-4">
      {/* {data.dishes[0].name} */}
      <h1 className="text-success">Select Your Meal</h1>


      
      <br></br>
      <br></br>

      <form>
        <div className="form-group">
          <label for="menu1" className="text-success">Please Select a Meal</label>
          <br></br>
          <select className="form-control" name="menu" id="menu1">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

        <br></br>
        <br></br>

        <div className="form-group">
          <label for="menu1" className="text-success">Please Enter Number of People</label>
          <br></br>
          <select className="form-control" name="menu" id="menu1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>


        <button type="button" className="btn btn-default btn-info">Previous</button>
        <span className="col-8"></span>
        <button type="button" className="btn btn-default btn-info">Next</button>

        <Restaurant/>
        <Dish/>
      </form>
    </div>
  );
}

export default App;
