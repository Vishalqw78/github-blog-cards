const core = require("@actions/core");
const axios = require("axios");
const convertedThumbnail = require("./utils/convertImage");


const processMediumFeed = async (username) => {
  let max_size = Number.parseInt(core.getInput('max_limit')) || 4;
  let MediumImg="";

  try {
    
    const { data: { items } } = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );

    let size = items.length;

    if (max_size > 10) {
      max_size = 10;
    }
    
    size = Math.min(size, max_size);

    const MediumArticles = [];

    for (let i = 0; i < size; i++) {
      const item = items[i];
      const url = item.link;
      const title = item.title;
      const date = item.pubDate;
      let thumbnail;
      if(item.thumbnail!=""){

         thumbnail = await convertedThumbnail(item.thumbnail);
  }
  else{
       thumbnail = await convertedThumbnail(MediumImg);
  }

  MediumArticles.push({
        index: i + 1,
        url,
        title,
        date,
        thumbnail
      });
    }

    return MediumArticles;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

module.exports = processMediumFeed;