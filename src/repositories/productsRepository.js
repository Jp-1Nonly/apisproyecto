const products = require('../models/products');
const datasheets = require('../models/datasheets');
const datasheetDetails = require('../models/datasheetDetails');
const masses = require('../models/masses');
const massDetails = require('../models/massDetails');
const supplies = require('../models/supplies');

class ProductsRepository {

  async findAll() {
    return await products.findAll({
      include: [
        {
          model: datasheets,
          include: [
            {
              model: datasheetDetails,
              include: [supplies]
            },
            {
              model: masses,
              include: [
                {
                  model: massDetails,
                  include: [supplies]
                }
              ]
            }
          ]
        }
      ]
    });
  }

  async findById(id) {
    return await products.findByPk(id, {
      include: [
        {
          model: datasheets,
          include: [
            {
              model: datasheetDetails,
              include: [supplies]
            },
            {
              model: masses,
              include: [
                {
                  model: massDetails,
                  include: [supplies]
                }
              ]
            }
          ]
        }
      ]
    });
  }
}

module.exports = new ProductsRepository();