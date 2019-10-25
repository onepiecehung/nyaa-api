<div align="center">
  <p>
    <a href="https://nodei.co/npm/nyaa-api-v2/">
    <img src="https://nodei.co/npm/nyaa-api-v2.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Nyaa-api-v2 get new torrent from nyaa

### Support npm: https://discord.gg/TfG5hep

```npm
npm i nyaa-api-v2
yarn add nyaa-api-v2
```

```javascript
const nyaa_api = require("nyaa-api-v2");

nyaa_api.getNewTorrent().then(res => {
  console.log(res); // array, type json
  console.log(res[0]); // https://github.com/onepiecehung/nyaa-api/blob/master/data.json
  console.log(res.length); // 75
});
```

# API

## getNewTorrentR18(): get content R-18 from nyaa.