import React from 'react';
import './App.css';
import {Carousel} from "react-bootstrap";

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
          <span className="mr-2">Home</span>
          <span className="mr-2">Event</span>
          <span className="mr-2">Accesories</span>
          <span className="mr-2">Apparel</span>
          <span className="mr-2">Fetured Items</span>
        </div>
        <select className="d-block d-sm-none">
          <option value="Home">Home</option>
          <option value="Event">Event</option>
          <option selected value="Accesories">Accesories</option>
          <option value="Apparel">Apparel</option>
          <option value="Fetured Items">Fetured Items</option>
        </select>
      </nav>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
              <span className="col-12">$88.00</span>
            </div>

          </div>
          <div className="col-6  col-md-3 d-flex justify-content-center">
            <div className={"row"}>
              <img src="card_example.png" className="img-thumbnail" alt=""/>

              <h6 className="col-12">Intro Copy Headline</h6>
              <span className="col-12">Item Category</span>
              <span className="col-12">$88.00</span>
            </div>

          </div>
          <div className="col-6  col-md-3 d-flex justify-content-center">
            <div className={"row"}>
              <img src="card_example.png" className="img-thumbnail" alt=""/>

              <h6 className="col-12">Intro Copy Headline</h6>
              <span className="col-12">Item Category</span>
              <span className="col-12">$88.00</span>
            </div>

          </div>
          <div className="col-6  col-md-3 d-flex justify-content-center">
            <div className={"row"}>
              <img src="card_example.png" className="img-thumbnail" alt=""/>

              <h6 className="col-12">Intro Copy Headline</h6>
              <span className="col-12">Item Category</span>
              <span className="col-12">$88.00</span>
            </div>

          </div>


        </div>
        <div className="container-fluid bg-light pb-5">
          <div className="row mt-4 ">
            <div className="col-12 col-md-3 ">
              <div className={"row"}>
                <h5 className="col-12">Quick Links</h5>
                <span className="col-12">Home</span>
                <span className="col-12">Event</span>
                <span className="col-12">Support</span>
                <span className="col-12">Contact</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={"row"}>
                <h5 className="col-12">Announcements / Promoted Content </h5>
                <span className="col-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className={"row"}>
                <h5 className="col-12" >Coming Soon</h5>
                <img src="carousel.png" className=" img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center ">
        <span className="mr-2">@2012 AcmeWidgets.</span>
        <span className="mr-2" >All Rights Reserved.</span>
        <span className="mr-2">Support: Support@AcmeWidgets.com</span>

      </div>
      </div>

  );
}

export default App;
