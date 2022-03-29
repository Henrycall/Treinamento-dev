var axios = require('axios');

async function getUser() {
    try {
        const data = {
            method: 'get',
            url: `https://itlean.atlassian.net/rest/api/2/user/search?query`,
            headers: { 
                'Accept': '*/*', 
                'Authorization': `Basic aGVucnkuY2FsbGVyYUBpdGxlYW4uY29tLmJyOlR1YzFOMkpWcUZKMnF3cXdFNWlhNzRCRg==`,
                'Content-Type': 'application/json'
            },
            auth: {
                username: 'henry.callera@itlean.com.br',
                password: 'Tuc1N2JVqFJ2qwqwE5ia74BF'
            }
         
}
        const retorno = await axios(data)
        console.log(retorno)
      } catch (error) {
        console.error(error);
      }
}
getUser()