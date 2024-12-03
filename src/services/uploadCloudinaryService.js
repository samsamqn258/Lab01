const cloudinary = require('../configs/configCloudinary')
const uploadImageFromLocal = async({path, folderName = 'product/8409'})=>{
    try{
        const uniqueId = Date.now().toString();
        const result = await cloudinary.uploader.upload(path,{
            folder: folderName,
            public_id: uniqueId
            
        })
        console.log(result)
        return {
            image_url: result.secure_url
        }
    }catch(e){
        console.error(e)
    }
}
module.exports = {
    uploadImageFromLocal
}