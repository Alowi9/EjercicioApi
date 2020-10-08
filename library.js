const rp = require("request-promise");

var options ={
    uri:"https://api.giphy.com/v1/gifs/random?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&tag=&rating=g",
    json:true
}

function obtenerGIF(){
    return rp(options);
}

module.exports = obtenerGIF;
