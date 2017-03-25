// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

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

// // Getting Data from mongodb Todos base on where conditon
// var data =  {
//     completed: true,
// }
// db.collection('Todos').find(data).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
//     console.log('Unable to Fetch Todos', err);
// });

// //Deleting Data from Todos Collection by using deleteMany function
// db.collection('Todos').deleteMany({text: 'Hello Man' }).then((result)=>{
//     console.log(result);
// })

// //Deleting Data from Todos Collection by using deleteOne function
// var data = {
//     text: 'Hello Man'
// }
// db.collection('Todos').deleteOne(data).then((result)=>{
//     console.log(result);
// })

// //Deleting Data from Todos Collection by using findOneAndDelete function
// var data = {
//     _id: new ObjectID("58d5290fb0c1dfdd91d92e9b")
// }
// db.collection('Todos').findOneAndDelete(data).then((result)=>{
//     console.log(result);
// })

//Updating Record In Database of Users Collection
db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58d60af96853d5e61ee06729")
},{
    $set: {
        name : 'Muhammad Kamran'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result)=> {
    console.log(result);
});
    db.close();

});