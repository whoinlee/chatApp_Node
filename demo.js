//##########
//#1.
//##########
// var _ = require('lodash');
// // console.log(_.random(1, 100));
// console.log(_.random(1, 10));

//####################
//#2. Read from files
//####################
// var fs = require('fs');
// var data = require('./data.json');
// // console.log(data);  //{ name: 'WhoIN' }
// console.log(data.name);     //WhoIN
// fs.readFile('./data.json', 'utf-8', (err, data) => {
//     // console.log(data);
//     // {
//     //     "name": "WhoIN"
//     // }
//     console.log(data.name); //undefined
//     var data2 = JSON.parse(data);    //convert to JSON
//     console.log(data2.name); //WhoIN
// });

//####################
//#3.Access Directories
//####################
// var fs = require('fs');
// fs.readdir('/', (err, data) => {
//     console.log(data);
// });

//####################
//#4.Write to a file
//####################
var fs = require('fs')

var data = {
    name: 'Eunsook'
}

fs.writeFile('data2.json', JSON.stringify(data), (err) =>{
    console.log('write finished. err: ', err)
})

