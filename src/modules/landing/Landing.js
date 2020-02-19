import React, { Component } from "react";
import Styles from "../../assets/css/Landing.module.css";
import Button from "@material-ui/core/Button";
import YoYoGiftImg from "../../assets/images/YoyoGift.png";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class Landing extends Component {
  cardsData = [
    {
      imgSrc: "https://images.gyft.com/merchants/i-1466456891460_667_hd.png",
      name: "Whole Foods Market"
    },
    {
      imgSrc: "https://images.gyft.com/merchants/i-188-1346844971201-60_hd.png",
      name: "Ebay"
    },
    {
      imgSrc: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
      name: "Amazon"
    },
    {
      imgSrc:
        "http://www.adageindia.in/photo/47460433/Is-Flipkarts-New-Logo-Strong-Enough-To-Behold-Its-Brand-Identity.jpg?19122",
      name: "Flipkart"
    },
    {
      imgSrc:
        "https://cms.qz.com/wp-content/uploads/2015/05/zomatos-4th-logo-2012-14.png?w=900&h=900&crop=1&strip=all&quality=75",
      name: "Zomato"
    }
  ];
  render() {
    return (
      <div>
        <div id="promo-ribbon" className={Styles.offerMessage}>
          Use code TRAVEL15 to get 15% off
        </div>
        <div className={Styles.mainSlide}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <h1 className={Styles.sectionTitle}>
                Buy, Send, & Redeem Gift Cards
              </h1>
              <div className={Styles.sectionText}>
                <p>YoYo makes it easy for you to give the perfect gift card</p>
                <p>and conveniently manage them from any device!!</p>
              </div>
              <Link
                to="/giftCards"
                onClick={this.handleClick}
                className={Styles.cardsBtn}
              >
                <Button variant="contained">Explore Cards</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={YoYoGiftImg} className={Styles.GiftImg} alt="YoYoImg" />
            </Grid>
          </Grid>
        </div>
        <div className={Styles.vendors}>
          <h2 className={Styles.vendorTitle}>
            Buy Gift Cards from your favourite Vendors
          </h2>
          <div style={{ textAlign: "center" }}>
            {/* Added map functon for repetitive code */}
            {this.cardsData.map(card => {
              return (
                <div className={Styles.vendorContainer} key={76}>
                  <img
                    className={Styles.vendorImage}
                    src={card.imgSrc}
                    alt={card.name}
                  />
                  <p className={Styles.vendorName}>{card.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
