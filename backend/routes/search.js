const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {

    // parameters from post request
    const SearchBarInput = req.body['input'];
    // read the search result JSON file
    console.log(SearchBarInput);
    console.log(SearchBarInput.length);
    const searchResults = JSON.parse(fs.readFileSync('./data/list.json', 'UTF8'));
    const result = [];
    if (SearchBarInput.length > 2){

        for (let i = 0; i < searchResults.length; i++){
            var obj = searchResults[i];
            console.log(obj);
            if (obj['title'].toLowerCase().includes(SearchBarInput.toLowerCase())){
                console.log("Pushed to list");
                result.push(obj);      
         };
        };

    }
    res.status(200).json(result);
});




module.exports = router;




