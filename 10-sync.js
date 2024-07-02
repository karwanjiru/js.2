const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
log(first)
writeFileSync(
    './content/result-sync.txt',
    `Meet the boys : ${first}, ${second}`,
    { flag : 'a'}
)