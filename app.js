// const axios = require('axios');
// const { html } = require('cheerio');
// const cheerio = require('cheerio')
// var pretty = require('pretty');

// // const url = 'https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests';
// // const url = 'https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests';
// const url = 'https://codeforces.com/contests';

// //  Async function which scrapes the data
// async function scrapeData() {
//     // try {

//         // Fetch HTML of the page we want to scrape
//         const { data } = await axios.get(url);
//         // const $ = cheerio.load(data);
//         const $ = cheerio.load(data)
//         const result = $('.contestList div.datatable table tbody')
//         // const result1 = result.$('.database');
//         // const result2 = result1('table')
//         console.log(pretty(result.html()));

//         // const result = $('#practice-contests-data');
//         // console.log("king here");
//         // console.log(result.html());
//         // const result = $("practice-contests-data tr").map((i, element) => ({

//         //     currency: $(element).find('td:nth-of-type(1)').text()
//         //     // , amount: $(element).find('td:nth-of-type(3)').text().trim()
//         // })).get()
//         // console.log(JSON.stringify(result))

//     } catch (err) {
//         console.error(err);
//     }
// }

// // request(url, function (error, response, html) {
// //     if (!error) {
// //         const $ = cheerio.load(html)
// //         const result = $(".ExRate-TR").map((i, element) => ({
// //             currency: $(element).find('td:nth-of-type(1)').text().trim()
// //             , amount: $(element).find('td:nth-of-type(3)').text().trim()
// //         })).get()
// //         console.log(JSON.stringify(result))
// //     }
// // })

// scrapeData();