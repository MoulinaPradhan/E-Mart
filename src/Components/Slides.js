import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Slides extends React.Component {
  render() {
    return (
      <div id="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/WA19/CLOTHING._CB1198675309_.jpg"
              alt="first slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://onlinecombooffers.files.wordpress.com/2015/08/yepme-mens-buy-1-get-1-free-offer-onlinecombooffers.jpg"
              alt="second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.supergrocery.in/wp-content/uploads/2019/11/sancks.jpg"
              alt="fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/lg7aRvG65Y4/maxresdefault.jpg"
              alt="fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf1f7742566789.57d05a35870fc.jpg"
              alt="sixth slide"
            />
          </Carousel.Item>
          {/**/}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.icicibank.com/managed-assets/images/offer-zone/credit-debit-card/kalyan-jewellers-offer-d.jpg"
              alt="seventh slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.bigbazaar.com/mega-home-fest/images/Bags.jpg"
              alt="eight slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slides;
