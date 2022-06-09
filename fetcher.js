const process = require('process');
const argv = process.argv.slice(2);
const request = require('request');
const fs = require('fs');


const fetch = (urlAddress, localPath) => {
  request(`${urlAddress}${localPath}`, (error, response, body) => {
    // console.log(`Body Has Been Fetched from ${urlAddress}${localPath}`)
    fs.writeFile(`./pages/${localPath}`, body,{flag: 'w+'}, err => {
      if (err) {
        console.log(err);
      }
      fs.stat(`./pages/${localPath}`, (err,stats) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`);
        }
      });
    });


  });
};


//////////////////////////////////////////////////////////////
// This was for practicing if I could make unique fileNames //
//////////////////////////////////////////////////////////////

// const simplifyUrlPath = (urlPath) => {
//   simpleAddress = urlPath.split('')
//   simpleAddress = simpleAddress.filter((char) => {
//     if(char !== '/'){
//       return char
//     }
//   })

//   simpleAddress = simpleAddress.filter((char) => {
//     if(char !== ':'){
//       return char
//     }
//   })

//   simpleAddress = simpleAddress.filter((char) => {
//     if(char !== '.'){
//       return char
//     }
//   })

//   simpleAddress = simpleAddress.join('')
//   return simpleAddress
// }

fetch(argv[0],argv[1]);
