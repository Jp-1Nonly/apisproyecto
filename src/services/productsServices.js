const productsRespository = require('../repos/productsRepository');

const getAllProducts = async () => {
  return await productsRespository.findAll();
}

const getProductById = async (id) => {
  return await productsRespository.findById(id);
}

module.exports = {
  getAllProducts,
  getProductById
}