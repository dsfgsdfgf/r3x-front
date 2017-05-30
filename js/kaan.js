//
// var ticker_btcusd_url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
//
//
//
// // var request = require('node_modules/request');
// // var client = new XMLHttpRequest();
// // let hget = require('node_modules/hget');
// // let marked = require('node_modules/marked');
//
//
// // console("DUDE SUPPPP");
//
//
//
//
//
//
//
//
//
//
//
// // On 'ENTER' ,     <     <    <   <  < < ! GO ! > >  >   >    >     >
// $(document).keypress(function (e) {
//     if (e.which == 13 || event.keyCode == 13) {
//         alert(' <     <    <   <  < < ! GO ! > >  >   >    >     >');
//     }
// });
//
//
//
//
//
//
//
// // The Glow...
// setInterval(function () {
//     $('#_2').addClass('jackInTheBox');
// }, 1000);
//
//
// // TADAAAAA
//
// setInterval(function () {
//     // $('#_0').toggleClass('jackInTheBox');
// }, 1000);
//
//
//
//
//
//
// //            $("_10").ajax()
//
//
// // void read();
// async function read () {
//     var html = await getRandomPonyFooArticle();
//     var md = hget(html, {
//         markdown: true,
//         root: 'main',
//         ignore: '.at-subscribe,.mm-comments,.de-sidebar'
//     });
//     var txt = marked(md, {
//         renderer: new Term()
//     });
//     console.log(txt);
// }
//
//
//
// function handler() {
//     var tmp = this.responseXML.getElementById('').textContent;
//     if(this.status == 200 && this.responseXML != null && tmp) {
//         // success!
//         $('_10').textContent = tmp;
//     } else {        // Zebugging purposes
//         alert("buddybooo handler() : FAIL");
//         // or ?
//         console.log("buddybooo handler() : FAIL");
//     }
// }
//
// // To log a message to server (Go backend, <<    /log  API   >> )
// function log(message) {
//     client.open("POST", "/log");
//     client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
//     client.send(message);
// }
//
//
// client.onload = handler;
// client.open("GET", ticker_btcusd_url);
// client.send();
// request.get(
//     `https://api.bitfinex.com/v2/tickers/ticker/tBTCUSD`,
//     (error, response, body) => console.log(body)
// )
//
//
//
//
