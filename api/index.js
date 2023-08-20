
import  express  from 'express';
import generateSVG from '../utils/generateSVG.js';
import processMediumFeed from '../feeds/processMediumFeed.js';
import processHashnodeFeed from '../feeds/processHashnodeFeed.js'
import processDevFeed from '../feeds/processDevFeed.js';
const app = express();
const PORT = 3000;
// Define a /bog route that accepts for blog card
app.use((req, res, next) => {
  if (req.url === '/') {
      res.redirect('/blog');
  } else {
      next();
  }
});
app.get('/blog-data', async (req, res) => {
  try {
    // Get parameters from the query string
    let { theme = 'default', blogname = 'medium', index = 1, username = 'vishalqw78' } = req.query;
    let Article;

    if (blogname === 'medium') {
      try {
          Article = await processMediumFeed(username);
        } catch (error) {
          return res.status(500).send('Username/blogname does not exist or match with site name');
        }
    } else if (blogname === 'dev') {
      try {
          Article = await processDevFeed(username);
        } catch (error) {
          return res.status(500).send('Username/blogname does not exist or match with site name');
        }
    } else if (blogname === 'hashnode') {
      try {
          Article = await processHashnodeFeed(username);
        } catch (error) {
          return res.status(500).send('Username/blogname does not exist or match with site name');
        }
    } else {
      return res.status(400).send('Invalid blogname');
    }

    const maxsize = Article.length;

    if (index > maxsize || index < 1) {
      index = 1;
    }
    let i=index-1;
    //destructure the Article at ith index
    const { url, title, date, author, thumbnail, description } = Article[i];
    //for sending the file as a data
    const contentdata = {theme, blogname, url, title, date, author, description};
    res.status(200).json(contentdata);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});
app.get('/blog', async (req, res) => {
    try {
      // Get parameters from the query string
      let { theme = 'default', blogname = 'medium', index = 1, username = 'vishalqw78' } = req.query;
      let Article;
  
      if (blogname === 'medium') {
        try {
            Article = await processMediumFeed(username);
          } catch (error) {
            return res.status(500).send('Username/blogname does not exist or match with site name');
          }
      } else if (blogname === 'dev') {
        try {
            Article = await processDevFeed(username);
          } catch (error) {
            return res.status(500).send('Username/blogname does not exist or match with site name');
          }
      } else if (blogname === 'hashnode') {
        try {
            Article = await processHashnodeFeed(username);
          } catch (error) {
            return res.status(500).send('Username/blogname does not exist or match with site name');
          }
      } else {
        return res.status(400).send('Invalid blogname');
      }
  
      const maxsize = Article.length;
  
      if (index > maxsize || index < 1) {
        index = 1;
      }
      let i=index-1;
      //destructure the Article at ith index
      const { url, title, date, author, thumbnail, description } = Article[i];
      //for sending the file as a SVG 
      res.setHeader('Content-Type', 'image/svg+xml');
      //to generate the card
      const contentsvg = await generateSVG(theme, blogname, url, title, date, author, thumbnail, description);
      res.status(200).send(contentsvg);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
app.all('*', (req, res, next) => {
  res.redirect('/blog');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

