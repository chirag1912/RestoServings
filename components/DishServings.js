import React from "react";
import "./DishServing.css";

function Dishserving() {
  return (
    <>
      <form>
          <br/>
          <br/>
        <h1>Select Dish and Number of Servings</h1>
        <br/>
        <br/>

        <div className="inputFormGroup">
          <div className="form-group">
            <label for="menu1" className="text-success">
              Please Select a Dish
            </label>
            <br></br>
            <select className="form-control" name="menu" id="menu1">
              <option>Pasta</option>
              <option>White Sauced Pasta</option>
              <option>Red Sauced Pasta</option>
            </select>
          </div>

          <br></br>
          <br></br>

          <div className="form-group">
            <label for="menu1" className="text-success">
              Enter Number of Servings
            </label>
            <br></br>
            <select className="form-control" name="menu" id="menu1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

        <br/>
        <button className="symbol">+</button>
        <br />

        <button type="button" className="btn btn-default btn-info">
          Previous
        </button>
        <span className="col-8"></span>
        <button type="button" className="btn btn-default btn-info">
          Next
        </button>
      </form>
    </>
  );
}

export default Dishserving;
