const productModel = require('../models/productModel');
const { BadRequestError } = require('../core/errorResponse');
const { uploadImageFromLocal } = require('../service/uploadCloudinaryService');
const createProduct = async(payload, file)=>{
    if (!file) {
        throw new BadRequestError('Image file is required');
    }
    const uploadResult = await uploadImageFromLocal({
        path: file.path,  
        folderName: 'product_images'
    });
    if (!uploadResult || !uploadResult.image_url) {
        throw new BadRequestError('Failed to upload image');
    }
    payload.product_image = uploadResult.image_url;
    const newProduct = await productModel.create(payload);
    if (!newProduct) {
        throw new BadRequestError('Failed to create product');
    }

    return newProduct;
}
module.exports = {
    createProduct
}