
const obtenerGif = require("./library");

obtenerGif().then(function (x){

        console.log(x.data);
     
        console.log("Tipo: " + x.data.type);
        console.log("Link del gif : " + x.data.url);
        console.log("Usuario que lo creo :" + x.data.username);
        console.log("Titulo del gif : " + x.data.title);
        console.log("Cuando lo subio " + x.data.import_datetime);

        console.log("Estado del gif (Numero de estado): " + x.meta.status);


}).catch(function (err){
    console.log("Error :C " + err.message);
});
