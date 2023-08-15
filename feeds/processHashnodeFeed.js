const core = require("@actions/core");
const axios = require("axios");
const fetchAndParseXML = require('./utils/fetchNParseXML');
const convertedThumbnail = require("./utils/convertImage");

const processHashnodeFeed = async (feedurl) => {
  let max_size = Number.parseInt(core.getInput('max_limit')) || 4;
  const HashnodeImg = "";

  try {
    
    const remoteXMLUrl = `${feedurl}/rss.xml`;
    const { data: { items } } = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=${feedurl}/rss.xml`
    );

    let size = items.length;

    if (max_size > 10) {
      max_size = 10;
    }
    

    
    size = Math.min(size, max_size);

    const HashnodeArticles = [];
    const thumbnailArray = await fetchAndParseXML(remoteXMLUrl);

    for (let i = 0; i < size; i++) {
      const item = items[i];
      const url = item.link;
      const title = item.title;
      const date = item.pubDate;
      let thumbnail;
      if(thumbnailArray[i]!=""){
       thumbnail = await convertedThumbnail(thumbnailArray[i]);
}
else{
     thumbnail = await convertedThumbnail(HashnodeImg);
}
HashnodeArticles.push({
        index: i + 1,
        url,
        title,
        date,
        thumbnail
      });
    }
    return HashnodeArticles;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

module.exports =processHashnodeFeed;