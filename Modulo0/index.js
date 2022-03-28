var axios = require('axios');
var fs = require('fs/promises')

var config = {
  method: 'get',
  url: 'https://ip-ranges.amazonaws.com/ip-ranges.json',
  headers: { }
};

axios(config)
.then(async function (response) {
    const data = response.data.prefixes
    const dataTrada = data.map((item)=> item.ip_prefix)
    await  fs.writeFile('ips.txt',dataTrada.join("\n"))
  console.log(dataTrada);
})
.catch(function (error) {
  console.log(error);
});
