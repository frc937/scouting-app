const mongo=require('mongodb').MongoClient
//module.exports=function(express) {
  //express.get('/server/view',function(req,res) {
  function a() {
    mongo.connect('mongodb://127.0.0.1:27017/scouting',(err,db)=>{
      db.collection('teams')
        .find({number:937})
        .each((err,item)=>{
          return item
        })
      db.close()
    })
  }
  //})
//}

console.log(a())