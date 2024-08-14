const clothes = [
    {
        "_id": 1,
        "name": "LICRAS GYMSHARK",
        "imgprincipalUrl": "img/licragymsharkseis.png",
        "price": 9000,
        "stock": "Disponible",
        "description": "Licras gymshark 6 colores, tela tipo brush no transparentan ajustada al contorno del cuerpo",
        "imgsecundary": "img/licragymsharkseis.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "6 COLORES",
        "talla": [ "S", "M"," L"],
        "categories": ["MAS VENDIDOS", "LICRAS", "GYMSHARK", "MUJER"]
    },
    {
        "_id": 2,
        "name": "DUOS DEPORTIVOS",
        "imgprincipalUrl": "img/DUOSNIKE5.png",
        "price": 10000,
        "stock": "Disponible",
        "description": "Duos deportivos NIKE licra corta, 5 colores, tela brush no transparentan y ajustada al contorno del cuerpo",
        "imgsecundary": "img/DUOSNIKE5.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "5 COLORES",
        "talla": [ "S", "M"," L"],
        "categories": ["MAS VENDIDOS", "DUOS DEPORTIVOS", "NIKE", "MUJER"]
    },
    {
        "_id": 3,
        "name": "SET NIKE",
        "imgprincipalUrl": "img/setnike8piezas.png",
        "price": 22900,
        "stock": "Disponible",
        "description": " el mejor Set nike color negro  8 piezas , tela brush no transparentan y ajustada al contorno del cuerpo",
        "imgsecundary": "img/setnike8piezas.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "8 PIEZAS",
        "talla": [ "S", "M"," L"],
        "categories": ["MAS VENDIDOS", "SETS", "NIKE", "MUJER"]
    },
    {
        "_id": 4,
        "name": "SET GYMSHARK",
        "imgprincipalUrl": "img/gymshark5piezas 2.png",
        "price": 17500,
        "stock": "Disponible",
        "description": "Set gymshark color negro y blanco  5 piezas , tela brush no transparentan y ajustada al contorno del cuerpo",
        "imgsecundary": "img/gymshark5piezas 2.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "5 PIEZAS",
        "talla": [ "S", "M"," L"],
        "categories": ["MAS VENDIDOS", "SETS", "GYMSHARK", "MUJER"]
    },
    {
        "_id": 5,
        "name": "GORRA GYMSHARK W",
        "imgprincipalUrl": "img/gorragymsharkw.png",
        "price": 9000,
        "pricepromo": 5000,
        "stock": "Disponible",
        "description": "Gorra gymshark blanca,con ajuste personalizado, combina el estilo y entrenamiento",
        "imgsecundary": "img/Gorragymshark2B.jpeg",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "Color Blanco",
        "talla": [ "Unica"],
        "categories": ["PROMOCION", "ACCESORIOS", "GYMSHARK", "GORRAS"]
    },
    {
        "_id": 6,
        "name": "DUO DEPORTIVO NIKE",
        "imgprincipalUrl": "img/duoslicralarga.png",
        "price": 11000,
        "pricepromo": 9000,
        "stock": "Disponible",
        "description": "duo deportivo nike licra larga , diferentes opciones a escojer tela brush",
        "imgsecundary": "img/duoslicralarga.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "LICRA LARGA S M L",
        "talla": [ "S", "M"," L"],
        "categories": ["PROMOCION", "DUOS DEPORTIVOS", "NIKE", "MUJER"]
    },
    {
        "_id": 7,
        "name": "DUO OVERZIZE pink BIKER",
        "imgprincipalUrl": "img/bikerduorosado.png",
        "price": 12000,
        "pricepromo": 10000,
        "stock": "Disponible",
        "description": "duo deportivo licra biker rosado , tela brush",
        "imgsecundary": "img/bikerduorosado.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "S M L",
        "talla": [ "S", "M"," L"],
        "categories": ["PROMOCION", "DUOS DEPORTIVOS", "MUJER"]
    },
    {
        "_id": 8,
        "name": "PANTALONETA NAUTICA W",
        "imgprincipalUrl": "img/Pantablanca.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/Pantablanca.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "COLOR BLANCO",
        "talla": [ "S", "M"," L"],
        "categories": ["PANTALONETAS", "HOMBRE"]
    },
    {
        "_id": 9,
        "name": "PANTALONETA HUGO BOSS",
        "imgprincipalUrl": "img/pantaAzul.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/pantaAzul.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "AZUL",
        "talla": [ "S", "M"," L"],
        "categories": ["PANTALONETAS", "HOMBRE"]
    },
    {
        "_id": 10,
        "name": "PANTALONETA NAUTICA AZUL",
        "imgprincipalUrl": "img/pantaNauticaAzul.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/pantaAzul.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "AZUL",
        "talla": [ "S", "M"," L"],
        "categories": ["PANTALONETAS", "HOMBRE"]
    },
    {
        "_id": 11,
        "name": "PANTALONETA NIKE NEGRA",
        "imgprincipalUrl": "img/pantaNikenegra.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/pantanegra2.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "NEGRO",
        "talla": [ "S", "M"," L"],
        "categories": ["PANTALONETAS", "HOMBRE"]
    },
    {
        "_id": 12,
        "name": "SET NIKE BLANCO 8P",
        "imgprincipalUrl": "img/setnikeblanco.png",
        "price": 20000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/setnikeblanco.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": [ "S", "M"," L"],
        "categories": ["SETS", "MUJER", "NIKE"]
    },
    {
        "_id": 13,
        "name": "FALDA DEPORTIVA NIKE NARANJA",
        "imgprincipalUrl": "img/FaldaDepNN.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/setnikeblanco.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": ["S", "M", " L"],
        "categories": ["FALDAS", "MUJER", "NIKE"]
    },
    {
        "_id": 14,
        "name": "FALDA DEPORTIVA NIKE VERDE",
        "imgprincipalUrl": "img/FaldaNV.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/setnikeblanco.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": ["S", "M", " L"],
        "categories": ["FALDAS", "MUJER", "NIKE"]
    },
    {
        "_id": 15,
        "name": "FALDA DEPORTIVA NIKE MORADA",
        "imgprincipalUrl": "img/FaldaNM.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/setnikeblanco.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": ["S", "M", " L"],
        "categories": ["FALDAS", "MUJER", "NIKE"]
    },
    {
        "_id": 16,
        "name": "FALDA DEPORTIVA NIKE NEGRA",
        "imgprincipalUrl": "img/FaldaNN.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Colocar aca descripcion, son tela buz en talla s m y l",
        "imgsecundary": "img/setnikeblanco.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": ["S", "M", " L"],
        "categories": ["FALDAS", "MUJER", "NIKE"]
    }

]