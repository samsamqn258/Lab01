    const mongoose = require('mongoose');
    const mongoosePaginate = require('mongoose-paginate-v2');
    const dotenv = require('dotenv');
    const slugify = require('slugify');
    dotenv.config();
    const { Schema, model } = mongoose;
    const COLLECTION_NAME = 'Products';
    const DOCUMENT_NAME = 'Product';
    const productSchema = new Schema({
        product_name: {
            type: String,
            required: true,
        },
        product_image: {
            type: String,
            required: true,
        },
        product_slug: {
            type: String,
            unique: true,
        },
        isDelete:{
            type: Boolean,
            default: false,
        },
        isPublish:{
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    });

    // Tạo slug cho sản phẩm trước khi lưu
    productSchema.pre('save', function (next) {
        this.product_slug = slugify(this.product_name, { lower: true });
        next();
    });

    // Tạo chỉ mục cho các trường cần tìm kiếm
    productSchema.index({ product_name: 'text'});

    // Kích hoạt phân trang cho mô hình
    productSchema.plugin(mongoosePaginate);



    module.exports = model(DOCUMENT_NAME, productSchema)
