import core from "@actions/core";
import axios from "axios";
import convertedThumbnail from "../utils/convertImage.js";


const processMediumFeed = async (username) => {
  let max_size = Number.parseInt(core.getInput('max_limit')) || 10;
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
      const author = item.author;
      const date = item.pubDate;
      let thumbnail;
      if(item.thumbnail!=""){

         thumbnail = await convertedThumbnail(item.thumbnail);
  }
  else{
       thumbnail = await convertedThumbnail(MediumImg);
  }

      const Predescription = item.description;
      const withoutFigcaption = Predescription.replace(/<figcaption>.*?<\/figcaption>/gs, '');
      const textContent = withoutFigcaption.replace(/<[^>]+>/g, '');
      const words = textContent.split(' ');
      const description = words.slice(0, 20).join(' ') + "...";

      

  MediumArticles.push({
        url,
        title,
        date,
        author,
        thumbnail,
        description,
  });
    }
    return MediumArticles;
  } catch (error) {
    throw new Error('Username/blogname does not exist or match with site name');
  }
};

export default processMediumFeed;
