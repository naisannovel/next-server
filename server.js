const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.LOCAL_MONGODB_SERVER)
    .then(()=> console.log('mongodb connected successfully'))
    .catch(()=> console.log('mongodb connection failed'))

app.listen(process.env.PORT || 4001,()=>{
    console.log(`listening on port ${process.env.PORT}`);
});