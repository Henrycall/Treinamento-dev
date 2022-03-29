var axios = require('axios');

async function getUser() {
    try {
        const data = {
            method: 'get',
            url: `https://itlean.atlassian.net/rest/api/2/user/search?query`,
            headers: { 
                'Accept': '*/*', 
                'Authorization': `Basic `,
                'Content-Type': 'application/json'
            },
            auth: {
                username: 'your email',
                password: 'your token'
            }
         
}
        const retorno = await axios(data)
        console.log(retorno)
      } catch (error) {
        console.error(error);
      }
}
getUser()