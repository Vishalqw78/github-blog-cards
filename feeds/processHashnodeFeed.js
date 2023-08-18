import core from "@actions/core";
import axios from "axios";
import fetchAndParseXML from './utils/fetchNParseXML.js';
import convertedThumbnail from "./utils/convertImage.js";

const processHashnodeFeed = async (feedurl) => {
  let max_size = Number.parseInt(core.getInput('max_limit')) || 10;
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
      const author = item.author;
      const date = item.pubDate;
      let thumbnail;
      if(thumbnailArray[i]!=""){
        thumbnail = await convertedThumbnail(thumbnailArray[i]);
 }
 else{
      thumbnail = await convertedThumbnail(HashnodeImg);
 }

      const Predescription = item.description;
      //const withoutFigcaption = Predescription.replace(/<figcaption>.*?<\/figcaption>/gs, '');
      const textContent = Predescription.replace(/<[^>]+>/g, '');
      const words = textContent.split(' ');
      const description = words.slice(0, 20).join(' ') + "...";

      

  HashnodeArticles.push({
        url,
        title,
        date,
        author,
        thumbnail,
        description,
  });
    }
    return HashnodeArticles;
  } catch (error) {
    throw new Error('Username/blogname does not exist or match with site name');
  }
};

export default processHashnodeFeed;