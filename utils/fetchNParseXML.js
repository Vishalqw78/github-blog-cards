const axios = require('axios');
const xml2js = require('xml2js');

const fetchAndParseXML=async(url)=> {
  try {
    const response = await axios.get(url);
    const xmlData = response.data;

    // Parse the XML content
    const parser = new xml2js.Parser();
    const parsedXml = await parser.parseStringPromise(xmlData);

    const thumbnailArray =[];
    for(let i=0;i<10;i++){
    const extractedTag = parsedXml.rss.channel[0].item[i].cover_image[0];
    thumbnailArray.push(extractedTag);
}
    return thumbnailArray;
  } catch (error) {
    console.error('Error fetching or parsing XML:', error);
    throw error;
  }
}

module.exports = fetchAndParseXML;
