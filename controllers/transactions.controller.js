const express=require("express")
const transactions=express.Router()


const transactionsArray=require("../models/transactions.model.js")


transactions.get("/",(req,res)=>{
    console.log(transactionsArray)
    res.send(transactionsArray)
})

//Create
transactions.post("/",(req,res)=>{
    
    transactionsArray.push(req.body)
    
    console.log(transactionsArray)
    res.send(transactionsArray[transactionsArray.length-1])
    
})

//Show page
transactions.get("/:transactionID",(req,res)=>{
    const{transactionID}=req.params
    
    if (transactionsArray[transactionID]){
        res.json(transactionsArray[transactionID])
      
    }
    else{
        res.status(400).send("Not found")
    }
})

//Update page
transactions.put("/:index",(req,res)=>{
    const {index}=req.params
    console.log(transactionsArray)

if (transactionsArray[index]){
    transactionsArray[index]=req.body
    res.send(transactionsArray)
}
})
// Delete

transactions.delete("/:index", (req, res) => {
    const deleted = transactionsArray.splice(req.params.index, 1);
    res.status(200).json(deleted);
  });

module.exports=transactions