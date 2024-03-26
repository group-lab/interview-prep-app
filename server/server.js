const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server is lisening on port ${PORT}...`);
        });
    }catch(err){
        console.log(err);
    }
}

start();