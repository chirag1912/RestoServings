import React from "react";

function Restaurant() {
  return (
    <>
          <br/>
          <br/>
        <h1 className="text-warning">Select a Restaurant</h1>
      <form className="container col-12">
          <div class="form-group">
            <label for="restaurant1">
                Select Restaurant
            </label>
            <select className="form-control" id="restaurant1" name="resto">
                <option>MCD</option>
                <option>Taco Bell</option>
            </select>
          </div>

          <button type="button" className="btn btn-default btn-info">Previous</button>
        <span className="col-8"></span>
        <button type="button" className="btn btn-default btn-info">Next</button>
      </form>
    </>
  );
}

export default Restaurant;
