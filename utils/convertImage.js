const axios = require('axios');

const convertedThumbnail = async (thumbnailUrl)=>{
    const { data: thumbnailRaw } = await axios.get(thumbnailUrl, {
      responseType: 'arraybuffer',
    });
  
    const base64Img = Buffer.from(thumbnailRaw).toString('base64');
    const imgTypeArr = thumbnailUrl.split('.');
    const imgType = imgTypeArr[imgTypeArr.length - 1];
    const convertedThumbnail = `data:image/${imgType};base64,${base64Img}`;
  
    return convertedThumbnail;
  }

module.exports = convertedThumbnail;