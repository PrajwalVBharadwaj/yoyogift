import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
const cardDetails = {
  id: 1,
  cardName: "Amazon Gift ",
  cardPoints: "1200",
  cardCategory: "Ecommerce",
  cardRetailer: "Amazon",
  cardIssueDate: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)",
  cardExpiryDate: "2019-06-29T00:00:00.000Z",
  cardCount: 95,
  cardImage: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
  cardVendor: "amazon",
  cardShortDesc: "10% OFF",
  receiverEmail: "test.mail.com",
  userEmail: "test.mail.com",
  cardLongDesc:
    "Amazon Gift Cards are the Perfect Gift, Every Time. Use the eBay Gift Card to shop from millions of items in Electronics, Toys, Motors, Fashion, Home & Garden, Art, Collectibles, Sporting Goods and everything in-between. eBay Gift Cards never expire and have no fees. Use it to shop now or wait for the deal of a lifetime.",
  cardComments: [
    {
      id: 1,
      first_name: "Sebastian",
      last_name: "Eschweiler",
      email: "sebastian@mindtree.com",
      rating: 4,
      comment: "Great gift card. Happy to gift!",
      commented_on: "Sun May 19 2019 15:43:25 GMT+0530 (India Standard Time)"
    },
    {
      id: 2,
      first_name: "Bill",
      last_name: "Joe",
      email: "billjoe@mindtree.com",
      rating: 3,
      comment: "10% discount on Amazon. Yay",
      commented_on: "Sun Jun 12 2019 15:43:25 GMT+0530 (India Standard Time)"
    },
    {
      id: 3,
      first_name: "Murphy",
      last_name: "Dil",
      email: "murphydil@mindtree.com",
      rating: 3,
      comment: "Woah! Instant discount.",
      commented_on: "Sun Apr 20 2019 15:43:25 GMT+0530 (India Standard Time)"
    }
  ]
};
const userDetails = {
  id: "115728151885118053689",
  email: "soumodips90@gmail.com",
  first_name: "Soumodip",
  last_name: "Sinha",
  balance_points: 500,
  wishlist: [],
  cards_gifted: [],
  cards_received: [],
  socialProfileLink: "testing"
};
export { shallow, mount, render, userDetails, cardDetails };
export default Enzyme;
