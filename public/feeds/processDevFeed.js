import { getInput } from "@actions/core";
import axios from "axios";
import convertedThumbnail from '../utils/convertImage.js';


const processDevFeed = async (username) => {
  let max_size = Number.parseInt(getInput('max_limit')) || 10;
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
      const author = item.author;
      const date = item.pubDate;
      let thumbnail;
      if(item.thumbnail!=""){

         thumbnail = await convertedThumbnail(item.thumbnail);
  }
  else{
       thumbnail = await convertedThumbnail(DevImg);
  }

      const Predescription = item.description;
      //const withoutFigcaption = Predescription.replace(/<figcaption>.*?<\/figcaption>/gs, '');
      const textContent = Predescription.replace(/<[^>]+>/g, '');
      const words = textContent.split(' ');
      const description = words.slice(0, 20).join(' ') + "...";

      

  DevArticles.push({
        url,
        title,
        date,
        author,
        thumbnail,
        description,
  });
    }
    return DevArticles;
  } catch (error) {
    throw new Error('Username/blogname does not exist or match with site name');
  }
};


export default processDevFeed;