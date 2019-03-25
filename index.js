const sum = require('./app/add')(100, 200);
const sub = require('./app/sub')(100, 200);
const mul = require('./app/mul')(100, 200);
const div = require('./app/div')(100, 200);

console.log(`Results: \n${sum}\n${sub}\n${mul}\n${div}`);