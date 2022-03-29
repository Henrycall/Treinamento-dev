var axios = require('axios');

async function getAllProjects() {
    try {
        const dados = {
            method: 'get',
            url: `https://itlean.atlassian.net/rest/api/3/project`,
            headers: { 
                'Accept': '*/*', 
                'Authorization': `Basic `,
                'Content-Type': 'application/json'
            },
            auth: {
                username: '',
                password: ''
            }
}
       
        const retorno = await axios(dados)
        if(data.response == 200) console.log("TODOS OS PROJETOS ", retorno)
      } catch (error) {
        console.error(error);
      }
}
getAllProjects()