const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectI} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('Connected To MongoDB Server');

    // //Inserting Record in Todos collection
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable To insert Record');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

// //Getting All data from mongodb Todos

// db.collection('Todos').find().toArray().then((docs)=> {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
//     console.log('Unable to Fetch Todos', err);
// });

// Getting Data from mongodb Todos base on where conditon
var data =  {
    completed: true,
}
db.collection('Todos').find(data).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
    console.log('Unable to Fetch Todos', err);
});


    db.close();

});