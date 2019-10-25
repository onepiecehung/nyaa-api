var testv = require("./index")

testv.getNewTorrent().then(res => {
    console.log(res[0]) // https://github.com/onepiecehung/nyaa-api/data.json
    console.log(res.length) // 75
})