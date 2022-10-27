const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }


    connect(){
        mongoose.connect("mongodb+srv://admin:820HdXTKXLNBBBcM@cluster0.dfmxbcr.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection sucessful");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        })
            }
}

module.exports = new Database();