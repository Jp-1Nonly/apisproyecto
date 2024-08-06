const BaseRepository = require('./BaseRepository');
const productCategories = require('../models/productCategories');

class ProductCategoriesRepository extends BaseRepository {
  constructor() {
    super(productCategories);
  }
}

module.exports = ProductCategoriesRepository;