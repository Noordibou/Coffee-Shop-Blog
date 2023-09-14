const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeShopSchema = new Schema({
    name: { type: String, required: true },
    writer: { type: String, required: true },
    description: { type: String, required: true },
    featuredItems: { type: String },
    cityState: { type: String },
    location: { type: String },
    website: { type: String },
    rating: { type: Number },
    image: { type: String },
})

coffeeShopSchema.statics.makeGoogleMapsLink = function (locationString) {
    if (locationString && locationString.startsWith('https://www.google.com/maps')) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };
  
const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);
module.exports = CoffeeShop;