const axios = require('axios');
const parseString = require('xml2js').parseString;

module.exports = {
    getNewTorrent: async function () {
        return new Promise(async function (resolve, reject) {
            await axios({
                method: 'get',
                baseURL: 'https://nyaa.si/?page=rss',
            })
                .then(async response => {
                    parseString(response.data, async function (err, result) {
                        (err) ? (reject(err)) : (resolve(result.rss.channel[0].item))
                    })
                })
        })
    },
    getNewTorrentR18: async function () {
        return new Promise(async function (resolve, reject) {
            await axios({
                method: 'get',
                baseURL: 'https://sukebei.nyaa.si/?page=rss',
            })
                .then(async response => {
                    parseString(response.data, async function (err, result) {
                        (err) ? (reject(err)) : (resolve(result.rss.channel[0].item))
                    })
                })
        })
    }
}