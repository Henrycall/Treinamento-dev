const dados = require('./dados.json')
const fs = require('fs') // O método fs.writeFileSync é usado para gravar algo no arquivo, mas se o arquivo não existir, ele cria novos arquivos junto com a gravação do conteúdo.
const buffer = require('node:buffer')


// const readFileData = fs.readFileSync('./dados.json').toString()

// const bufferFrom = Buffer.from(readFileData)


// const tradedData = bufferFrom.toString()


// const FInaldata = JSON.parse(tradedData.toString())


// const newData = FInaldata.resources.map((item)=>{
//     item.secure_url
// })


// console.log(newData)

const ArrayData = dados.resources


const finalyTest = ArrayData.map((item)=>{
   return item.secure_url
    })
 
  fs.writeFileSync("urlsDoJardel2.0.txt", finalyTest.join('\n'))

