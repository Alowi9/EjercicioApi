# EjercicioApi



Nombre de la API : GIPHY
Link a web principal : https://giphy.com/
Documentación: https://developers.giphy.com/docs/api#quick-start-guide

Introducción: Se consume una Api de "giphy", devuelve una imagen random y algunos datos de más como por ej: quien subio la imagen, cuando la subio, que estado tiene, etc:

Uso de la API: Leyendo la documentación extraer y comentar cuales son los recursos expuestos por la API que te interesan, describiendo:
- Qué es lo que hacen: haces una peticion al servidor por distintas formas de busqueda y te devuelve una imagen que busques puede ser
  de forma aleatoria o algo que un usuario busque por su placer.
    
- A través de qué métodos HTTP se pueden acceder:  por GET 

- Qué parámetros reciben y de qué forma (por URL o por el cuerpo y en qué formato JSON/XML/Texto plano/Valores por formulario): se hace
con una mezcla de items que pide  un "API KEY", que es un codigo libre que lo obtenes solo con loguearte con un usuario cualquiera + 
un string para el tema de buscar alguna imagen especifica o en modo random + un numero de que te devuelve la cantidad de imagenes q te devuelve el servidor + 
una letra que se pone como para guiar a que tipo de publico esta dirigido (https://developers.giphy.com/docs/optional-settings/#rating) + el idioma por ej si es 
español seria "es" 

- Qué devuelve el método y en qué formato JSON/XML/Texto plano: el metodo devuelve todo en formato de json y de ahi podes acceder a sus propiedades.

- Qué errores puede arrojar la API y que significan (si es que están documentados)
Code	Type	Description
200	- OK	Your request was successful!
400	- Bad Request	Your request was formatted incorrectly or missing a required parameter(s).
403	- Forbidden	You weren't authorized to make your request; most likely this indicates an issue with your API Key.
404	- Not Found	The particular GIF or Sticker you are requesting was not found. This occurs, for example, if you request a GIF by using an id that does not exist.
429	- Too Many Requests	Your API Key is making too many requests. Read about requesting a Production Key to upgrade your API Key rate limits.


PD: Links útiles
https://github.com/public-apis/public-apis (Las que digan Auth: No)
https://shkspr.mobi/blog/2016/05/easy-apis-without-authentication/
https://any-api.com/
https://public-apis.xyz/
