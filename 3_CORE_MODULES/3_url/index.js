const url = require('url')
const address = 'http://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address) //url decomposta

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))


