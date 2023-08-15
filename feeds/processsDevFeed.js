const core = require("@actions/core");
const axios = require("axios");
const convertedThumbnail = require("../utils/convertImage");


const processDevFeed = async (username) => {
  let max_size = Number.parseInt(core.getInput('max_limit')) || 4;
  const DevImg="https://res.cloudinary.com/practicaldev/image/fetch/s--vvHcev7p--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/954otlp8dcw90j5ftkje.png";

  try {
    
    const { data: { items } } = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/${username}`
    );

    let size = items.length;

    if (max_size > 10) {
      max_size = 10;
    }
    
    size = Math.min(size, max_size);

    const DevArticles = [];

    for (let i = 0; i < size; i++) {
      const item = items[i];
      const url = item.link;
      const title = item.title;
      const date = item.pubDate;
      let thumbnail= await convertedThumbnail(DevImg);

  DevArticles.push({
        index: i + 1,
        url,
        title,
        date,
        thumbnail
      });
    }
    console.log(DevArticles);

    return DevArticles;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};


module.exports = processDevFeed;