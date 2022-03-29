var axios = require('axios');

async function getUser() {
    try {
        const dados = {
            method: 'post',
            url: `https://itlean.atlassian.net/rest/api/2/issue`,
            headers: { 
                'Accept': '*/*', 
                'Authorization': `Basic "your token here"`,
                'Content-Type': 'application/json'
            },
            auth: {
                username: '"you email"',
                password: '"you password its your token !"'
            },
            data: {
                "fields": {
                    "project": {
                        "id": "10088"
                    },
                    "summary": "Consumindo API do jura",
                    "description": "creating middleware to get the hours",
                    "issuetype": {
                        "id": "10006"
                    }
                }
            }
}
        if(data.response == 200) console.log("Task criada")
        const retorno = await axios(dados)
        console.log(retorno)
      } catch (error) {
        console.error(error);
      }
}
getUser()