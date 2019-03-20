const http = require('http');
const chalk = require('chalk');



const server = http.createServer((request, response) => {

 //sur chrome
  response.writeHead(200);

 // const log = console.log;
 const paru= log(chalk.blue('dan') + ' steph' + chalk.red('radoudou')+ chalk.green('nicolas'));

   response.end('Hello World /n doudou');
    
});
server.listen(3000);
console.log('Adresse du serveur: http://localhost:3000');

//const log = console.log;
console.log(chalk.blue('dan  ') + ' steph  ' + chalk.red('radoudou  ')+ chalk.green('nicolas  '));
//console.log(paru);

