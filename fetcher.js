const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');



const fetcher = (url, filePath) => {
  request(url, (error, response, body) => {

    const content = body;
    const stats = fs.statSync(filePath);
    const bytes = stats.size;
    fs.appendFile(filePath, content, err => {
      if (err) {
        console.error(err);
      }
    });

    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
    });

    console.log(`Downloaded and saved ${bytes} to ${filePath}`);
  });
};

fetcher(args[0], args[1]);