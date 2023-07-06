const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require("lodash")
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://theAlphaCoder06:Mongodb%4023071971@cluster.2e8b6lq.mongodb.net/toDoListDB?retryWrites=true&w=majority", {useNewUrlParser: true});

const itemsSchema = {
  name: String
}
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your To Do List"
})
const item2 = new Item({
  name: "Tap the + button to add a new item"
})
const item3 = new Item({
  name: "<-- Tap this to delete an item"
})
const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);



app.get("/", function(req, res) {

  Item.find({},(err, foundItems)=>{
    if(foundItems === 0){
      Item.insertMany(defaultItems,(err)=>{
        if(err)
          console.log(err)
        else{
          console.log("Success")
        }
      })
    }
    else{
      List.find({}, (err, foundList) => {

        res.render("list", {listTitle: "Tasks", newListItems: foundItems, list: foundList});
      })
    }
  })


});

app.get("/:customListName", (req, res)=>{
  const customListName = _.capitalize(req.params.customListName);
  List.findOne({name: customListName}, (err, foundList)=>{
    if(!err){
      if(!foundList){
        const list = new List({
          name: customListName,
          items: defaultItems
        })
        list.save();
        res.redirect("/" + customListName);
      }
      else{
        List.find({}, (err, foundCustomList) => {
          res.render("list", {listTitle: foundList.name, newListItems: foundList.items, list:foundCustomList})
        })
      }
    }
  })
})

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  })
  if(listName === "Tasks"){
    item.save();
    res.redirect("/");
  }else{
    List.findOne({name: listName}, (err, foundList)=>{
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }

});

app.post("/delete", (req, res)=>{
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
  
  if(listName === "Tasks"){
    Item.findByIdAndRemove(checkedItemId, (err)=>{
      if(!err){
        console.log("Success")
        res.redirect("/");
      }
    })
  }else{
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList)=>{
      if(!err)
      res.redirect("/" + listName);
    });
  }
  
});

app.post("/deletelist", (req, res)=>{
  const listName = req.body.listName;
  const button = req.body.deletebutton;
  console.log(listName, button);
  res.redirect("/");
});



app.post('/newList', (req, res) => {
  const newListName  = _.capitalize(req.body.customList);
  List.findOne({name: newListName}, (err, foundList) => {
    if(!err){
      if(!foundList){
        const list = new List({
          name: newListName,
          items: defaultItems
        })
        list.save();
        res.redirect("/" + newListName);
      }
      else{
        List.find({}, (err, foundCustomList) => {
          res.render('list', {listTitle: foundList.name, newListItems: foundList.items, list:foundCustomList})
        })
      }
    }
  })
});

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

// app.get("/about", function(req, res){
//   res.render("about");
// });

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
