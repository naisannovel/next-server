const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.MONGODB_SERVER.replace('<password>',process.env.DB_PASSWORD);

mongoose.connect(DB)
    .then(()=> console.log('mongodb connected successfully'))
    .catch(()=> console.log('mongodb connection failed'))

app.listen(process.env.PORT || 4001,()=>{
    console.log(`listening on port ${process.env.PORT}`);
});