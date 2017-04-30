var csv = require('csv-parser')
var fs = require('fs')
//var file = '15eofinextractdoc/990-Table 1.csv'
//var file = '15eofinextractdoc/990-EZ-Table 1.csv'
var file = '15eofinextractdoc/990-PF-Table 1.csv'

var fullData = {};

fs.createReadStream(file)
  .pipe(csv())
  .on('data', function (data) {

    fullData[data.key] = {
      desc: data.desc,
      type: data.type
    }
  }).on('end', function(){
    console.log(JSON.stringify(fullData))
  })
