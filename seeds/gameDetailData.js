const { Categories } = require('../models');

const seedData = [
  {
    "category_name": "General Knowledge"
  },
  {
    "category_name": "Entertainment: Books"
  },
  {
    "category_name": "Entertainment: Film"
  },
  {
    "category_name": "Entertainment: Music"
  },
  {
    "category_name": "Entertainment: Musicals & Theatres"
  },
  {
    "category_name": "Entertainment: Television"
  },
  {
    "category_name": "Entertainment: Video Games"
  },
  {
    "category_name": "Entertainment: Board Games"
  },
  {
    "category_name": "Science & Nature"
  },
  {
    "category_name": "Science: Computers"
  },
  {
    "category_name": "Science: Mathematics"
  },
  {
    "category_name": "Mythology"
  },
  {
    "category_name": "Sports"
  },
  {
    "category_name": "Geography"
  },
  {
    "category_name": "History"
  },
  {
    "category_name": "Politics"
  },
  {
    "category_name": "Art"
  },
  {
    "category_name": "Celebrities"
  },
  {
    "category_name": "Animals"
  },
  {
    "category_name": "Vehicles"
  },
  {
    "category_name": "Entertainment: Comics"
  },
  {
    "category_name": "Science: Gadgets"
  },
  {
    "category_name": "Entertainment: Japanese Anime & Manga"
  },
  {
    "category_name": "Entertainment: Cartoon & Animations"
  }
];

const seedGameDetail = () => Categories.bulkCreate(seedData);

module.exports = seedGameDetail;
