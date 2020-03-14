'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const prefectureDATAmap = new Map(); // key: 都道府県　value: 集計データのオブジェクト
rl.on('line',(linestring) => {
    const columns = linestring.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[1];
    const popu = parseInt(columns[3]);
    if (year === 2010 || year === 2015) {
        let value = prefectureDateMap.get(prefecture);
        if (!value) {
           value ={
            popu10: 0,
            popu15: 0,
            change: null
        };
    }
    if (year === 2010) {
        value.popu10 = popu;
    }
    if (year === 2015) {
        value.popu15 =popu;
    } 
    prefectureDATAmap.set(prefecture, value);
});
rl.on('close',() => {
    console.log(prefectureDateMap);
});
 

　　　/*　console.log(year);
        console.log(prefecture);
        console.log(popu)
/*console.log(linestring);*/