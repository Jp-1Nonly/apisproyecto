const productCategoriesRespository = require('../repositories/productCategoriesRepository');

const getAllProductCategories = async () => {
  return await productCategoriesRespository.findAll();
}

const getProductCategorieById = async (id) => {
  return await productCategoriesRespository.findById(id);
}

const createProductCategorie = async (data) => {
  return await productCategoriesRespository.create(data);
}

const updateProductCategorie = async (id, data) => {
  return await productCategoriesRespository.update(id, data);
}

const deleteProductCategorie = async (id) => {
  return await productCategoriesRespository.delete(id);
}

module.exports = {
  getAllProductCategories,
  getProductCategorieById,
  createProductCategorie,
  updateProductCategorie,
  deleteProductCategorie
}