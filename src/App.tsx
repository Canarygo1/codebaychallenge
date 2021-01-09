import React from 'react';
import './App.css';

function App() {

  return (
    <div className="">
      <nav className="navbar justify-content-md-end navbar-light bg-light">
        <div className="mr-2">
          <span>12</span>
          <i className="bi-cart "></i>
        </div>
        <span className="align-middle mr-1">My account</span>
        <form className="form-inline">
          <input className="form-control  " type="search" placeholder="Search" aria-label="Search"></input>
        </form>
      </nav>
      <nav className="navbar  navbar-light ">
        <a className="navbar-brand" href="/cas">
          <h2>A Big Title</h2>
        </a>
        <div className="d-none d-sm-block">
          <span>Home</span>
          <span>Event</span>
          <span>Accesories</span>
          <span>Apparel</span>
          <span>Fetured Items</span>
        </div>
        <select className="d-block d-sm-none">
          <option value="Home">Home</option>
          <option value="Event">Event</option>
          <option selected value="Accesories">Accesories</option>
          <option value="Apparel">Apparel</option>
          <option value="Fetured Items">Fetured Items</option>
        </select>
      </nav>
      <h5>Intro Copy Headline</h5>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.</span>
      <div className="container-fluid">

      <div className="row mt-4 ">
        <div className="col-6  col-md-3 d-flex justify-content-center">
          <div className={"row"}>
            <img src="card_example.png" className="img-thumbnail" alt=""/>

            <h6 className="col-12">Intro Copy Headline</h6>
            <span className="col-12">Item Category</span>
            <span className="col-12">Intro Copy Headline</span>
          </div>

        </div>
        <div className="col-6  col-md-3 d-flex justify-content-center">
          <div className={"row"}>
            <img src="card_example.png" className="img-thumbnail" alt=""/>

            <h6 className="col-12">Intro Copy Headline</h6>
            <span className="col-12">Item Category</span>
            <span className="col-12">Intro Copy Headline</span>
          </div>

        </div>
        <div className="col-6  col-md-3 d-flex justify-content-center">
          <div className={"row"}>
            <img src="card_example.png" className="img-thumbnail" alt=""/>

            <h6 className="col-12">Intro Copy Headline</h6>
            <span className="col-12">Item Category</span>
            <span className="col-12">Intro Copy Headline</span>
          </div>

        </div>
        <div className="col-6  col-md-3 d-flex justify-content-center">
          <div className={"row"}>
            <img src="card_example.png" className="img-thumbnail" alt=""/>

            <h6 className="col-12">Intro Copy Headline</h6>
            <span className="col-12">Item Category</span>
            <span className="col-12">Intro Copy Headline</span>
          </div>

        </div>


      </div>
      </div>
    </div>

  );
}

export default App;
