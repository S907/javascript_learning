const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

console.log("line number 5");

request(url, cb);

function cb(err, response, html){
    if(err){
        console.log(err);
    } else{
        console.log(html);
    }
}

function extractHTML(html){
    let $ = cheerio.load(html);
  let eleArr = $(".d-flex .match-comment-long-text");
  let text=$(eleArr[0]).text();
  let textData=$(eleArr[0]).html();


  console.log("text data", text);
  console.log("html data", textData);

}

console.log("line number 17");