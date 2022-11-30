Update document
--- update
--updateOne
--updateMany

/ db.food.update({"foodType":"amla"},{$set:{"price":"10000"}})
db.food.updateOne({"foodType":"amla"},{$set:{"price":"10000", "date":"29th November"}})

db.food.updateMany({"verified":true},{$set:{"gender":"male"}})


PROJECTIOONS
it is another name foor selecting a field either hiding or showing it

 db.food.find({"verified":false})

 //various conditions that can be used

 Equality =eq
 less than =lt
 less than equal= lte
 Greater than=gt
 Greater than equal -gte
 Noot= not


db.shop.find({"price":{$lt:6000}})
 db.shop.findOne({"price":{$lt:6000}})
  db.shop.findOne({"_id":ObjectId("638710353c67f336b9d49287")})
  ProductFood> db.shop.deleteOne({"_id":ObjectId("638710353c67f336b9d49287")})
  db.shop.findOneAndDelete({"_id":ObjectId("638710353c67f336b9d49287")})
  db.shop.findOneAndReplace({"name":"Prince"},{"name":"Prince Nmezi", "price":30000})
   db.shop.find({}).limit(1)
    db.shop.find({}).sort({"price":-1})
 $and 
 $or

 db.food.find({},{"_id":1,"price":0,"foodType":0,"date":0,"verified":0,"gender":0})


//pipeline

var pipline=[
    {$sort:{"price":-1}},
    {$limit:1}
]
db.shop.aggregate(pipline)
