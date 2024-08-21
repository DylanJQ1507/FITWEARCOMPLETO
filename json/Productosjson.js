const clothes = [
    {
        "_id": 1,
        "name": "LICRAS GYMSHARK",
        "imgprincipalUrl": "img/licragymsharkseis.png",
        "price": 9000,
        "stock": "Disponible",
        "description": "Licras Gymshark en 6 colores. Hechas de tela tipo brush, estas licras se ajustan perfectamente al contorno del cuerpo y no son transparentes, ofreciendo comodidad y estilo durante tus entrenamientos.",
        "imgsecundary": "img/licashak2.png",
        "imgter": "img/licashak3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "6 COLORES",
        "talla": ["S", "M", "L"],
        "categories": ["MAS VENDIDOS", "LICRAS", "GYMSHARK", "MUJER"],
        "text": ["Lo mejor que he podido comprar me hizo muy feliz", "La calidad de la tela es la mejor que he podido probar", "Super recomendados excelente servicio"],
        "names": ["Sebastian Barco", "Vanessa Gonzales", "Maria Jimenez"],
        "ocupation": ["Estudiante", "Maestra", "Jugadora Volleyball"],

    },
    {
        "_id": 2,
        "name": "DUOS DEPORTIVOS",
        "imgprincipalUrl": "img/DUOSNIKE5.png",
        "price": 10000,
        "stock": "Disponible",
        "description": "Duos deportivos Nike en licra corta, disponibles en 5 colores. Fabricados con tela brush, estos conjuntos son ideales para un ajuste perfecto y total comodidad durante tus actividades físicas.",
        "imgsecundary": "img/nikeduo2.png",
        "imgter": "img/nikeduo3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "5 COLORES",
        "talla": ["S", "M", "L"],
        "categories": ["MAS VENDIDOS", "DUOS DEPORTIVOS", "NIKE", "MUJER"],
        "text": ["Una experiencia de compra muy satisfactoria", "El producto es de alta calidad", "Muy contenta con el servicio recibido"],
        "names": ["Jorge Hernández", "Silvia Pérez", "Luis Martínez"],
        "ocupation": ["Economista", "Enfermera", "Biólogo"]
    },
    {
        "_id": 3,
        "name": "SET NIKE",
        "imgprincipalUrl": "img/setnike8piezas.png",
        "price": 22900,
        "stock": "Disponible",
        "description": "Set Nike de color negro compuesto por 8 piezas. Hecho de tela brush, este set está diseñado para ofrecerte un ajuste cómodo y estilizado, ideal para cualquier actividad deportiva.",
        "imgsecundary": "img/setnike2.png",
        "imgter": "img/setnike3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "8 PIEZAS",
        "talla": ["S", "M", "L"],
        "categories": ["MAS VENDIDOS", "SETS", "NIKE", "MUJER"],
        "text": ["La calidad es insuperable y el servicio excelente", "Llegó en el tiempo prometido y en perfectas condiciones", "Estoy muy feliz con mi compra"],
        "names": ["Catalina Vargas", "Héctor Mendoza", "Ana Morales"],
        "ocupation": ["Médico", "Diseñador", "Profesor"]
    },
    {
        "_id": 4,
        "name": "SET GYMSHARK",
        "imgprincipalUrl": "img/gymshark5piezas 2.png",
        "price": 17500,
        "stock": "Disponible",
        "description": "Set Gymshark de color negro y blanco, compuesto por 5 piezas. Fabricado con tela brush que no transparenta, este set ofrece un ajuste perfecto y un estilo atractivo para tus entrenamientos.",
        "imgsecundary": "img/setgymnshark2.png",
        "imgter": "img/setgymnshark3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "5 PIEZAS",
        "talla": ["S", "M", "L"],
        "categories": ["MAS VENDIDOS", "SETS", "GYMSHARK", "MUJER"],
        "text": ["Todo salió perfecto, el producto es excelente", "La atención al cliente fue muy eficaz", "Repetiré sin duda"],
        "names": ["Santiago Torres", "Carolina Martínez", "Mateo García"],
        "ocupation": ["Programador", "Nutricionista", "Periodista"]
    },
    {
        "_id": 5,
        "name": "GORRA GYMSHARK W",
        "imgprincipalUrl": "img/gorragymsharkw.png",
        "price": 9000,
        "pricepromo": 5000,
        "stock": "Disponible",
        "description": "Gorra Gymshark blanca con ajuste personalizado. Combina estilo y funcionalidad, ideal para completar tu look deportivo y protegerte del sol durante tus entrenamientos.",
        "imgsecundary": "img/Gorragymshark2B.jpeg",
        "imgter": "img/Gorragymshark3.jpeg",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "Color Blanco",
        "talla": ["Unica"],
        "categories": ["PROMOCION", "ACCESORIOS", "GYMSHARK", "GORRAS"],
        "text": ["La compra fue simple y el producto llegó a tiempo", "La calidad es increíble, vale la pena cada peso", "Recomiendo totalmente este producto"],
        "names": ["Natalia Gómez", "Andrés Martínez", "Daniela López"],
        "ocupation": ["Chef", "Administrador", "Vendedora"]
    },
    {
        "_id": 6,
        "name": "DUO DEPORTIVO NIKE",
        "imgprincipalUrl": "img/duoslicralarga.png",
        "price": 11000,
        "pricepromo": 9000,
        "stock": "Disponible",
        "description": "Duo deportivo Nike en licra larga, disponible en diferentes opciones de color. Hecho de tela brush, ofrece comodidad y ajuste perfecto para tus actividades físicas.",
        "imgsecundary": "img/setduonike2.png",
        "imgter": "img/setduonike3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "LICRA LARGA S M L",
        "talla": ["S", "M", "L"],
        "categories": ["PROMOCION", "DUOS DEPORTIVOS", "NIKE", "MUJER"],
        "text": ["El producto es justo lo que buscaba", "Muy satisfecho con la rapidez de la entrega", "El servicio al cliente es de lo mejor"],
        "names": ["Carla Martínez", "Felipe Castro", "Ricardo Jiménez"],
        "ocupation": ["Ingeniero de Software", "Gerente", "Farmacéutico"]
    },
    {
        "_id": 7,
        "name": "DUO OVERZIZE pink BIKER",
        "imgprincipalUrl": "img/bikerduorosado.png",
        "price": 12000,
        "pricepromo": 10000,
        "stock": "Disponible",
        "description": "Duo deportivo licra biker rosado, hecho de tela brush. Perfecto para quienes buscan estilo y confort en sus entrenamientos.",
        "imgsecundary": "img/duover2.png",
        "imgter": "img/duover3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "S M L",
        "talla": ["S", "M", "L"],
        "categories": ["PROMOCION", "DUOS DEPORTIVOS", "MUJER"],
        "text": ["Una excelente experiencia de compra", "La calidad del producto es de primera", "Sin duda repetiré mi compra"],
        "names": ["Esteban Gómez", "Sandra Ruiz", "Julian Cárdenas"],
        "ocupation": ["Profesor", "Abogada", "Economista"]
    },
    {
        "_id": 8,
        "name": "PANTALONETA NAUTICA W",
        "imgprincipalUrl": "img/Pantablanca.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Pantaloneta náutica blanca, hecha de tela buz. Disponible en tallas S, M y L, ideal para actividades acuáticas y deportivas.",
        "imgsecundary": "img/Pantablanca2.png",
        "imgter": "img/Pantablanca3.png",
        
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "COLOR BLANCO",
        "talla": ["S", "M", "L"],
        "categories": ["PANTALONETAS", "HOMBRE"],
        "text": ["El producto llegó a tiempo y en perfecto estado", "Muy contento con la compra, superó mis expectativas", "El proceso de compra fue muy fluido"],
        "names": ["Paola Herrera", "Emilio Fernández", "Valeria Ríos"],
        "ocupation": ["Fisioterapeuta", "Arqueólogo", "Técnico"]
    },
    {
        "_id": 9,
        "name": "PANTALONETA HUGO BOSS",
        "imgprincipalUrl": "img/pantaAzul.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Pantaloneta azul Hugo Boss, hecha de tela buz. Disponible en tallas S, M y L, perfecta para un look elegante y cómodo durante tus actividades.",
        "imgsecundary": "img/pantahugo2.png",
        "imgter": "img/pantahugo3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "AZUL",
        "talla": ["S", "M", "L"],
        "categories": ["PANTALONETAS", "HOMBRE"],
        "text": ["Estoy encantada con el producto y el servicio", "La atención postventa es excelente", "Todo el proceso fue muy profesional"],
        "names": ["Mónica Fernández", "Felipe Martínez", "Gabriela Castro"],
        "ocupation": ["Diseñadora Gráfica", "Juez", "Educadora"]
    },
    {
        "_id": 10,
        "name": "PANTALONETA NAUTICA AZUL",
        "imgprincipalUrl": "img/pantaNauticaAzul.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Pantaloneta náutica azul, hecha de tela buz. Disponible en tallas S, M y L, ideal para quienes buscan comodidad y estilo en actividades acuáticas.",
        "imgsecundary": "img/patanautica2.png",
        "imgter": "img/patanautica3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "AZUL",
        "talla": ["S", "M", "L"],
        "categories": ["PANTALONETAS", "HOMBRE"],
        "text": ["La compra fue rápida y sin complicaciones", "El producto llegó tal como lo esperábamos", "Excelente relación calidad-precio"],
        "names": ["Fernando Martínez", "Isabella Morales", "Luis López"],
        "ocupation": ["Médico", "Ingeniera", "Cocinero"]
    },
    {
        "_id": 11,
        "name": "PANTALONETA NIKE NEGRA",
        "imgprincipalUrl": "img/pantaNikenegra.png",
        "price": 12000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Pantaloneta Nike negra hecha de tela buz, disponible en tallas S, M y L. Ideal para actividades deportivas y para aquellos que buscan un look elegante y cómodo.",
        "imgsecundary": "img/pantanegra2.png",
        "imgter": "img/pantanegranike2.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "NEGRO",
        "talla": ["S", "M", "L"],
        "categories": ["PANTALONETAS", "HOMBRE"],
        "text": ["El mejor servicio que he recibido en mucho tiempo", "La calidad del producto es excepcional", "Recomiendo este producto a todos mis amigos"],
        "names": ["María Gómez", "Ricardo Molina", "Laura Sánchez"],
        "ocupation": ["Marketing", "Abogada", "Fotógrafa"]
    },
    {
        "_id": 12,
        "name": "SET NIKE BLANCO 8P",
        "imgprincipalUrl": "img/setnikeblanco.png",
        "price": 20000,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Set Nike blanco de 8 piezas, fabricado con tela buz. Disponible en tallas S, M y L, este set ofrece un ajuste perfecto y es ideal para quienes buscan estilo y comodidad en sus entrenamientos.",
        "imgsecundary": "img/setnikeblanco2.png",
        "imgter": "img/setnikeblanco3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "BLANCO",
        "talla": ["S", "M", "L"],
        "categories": ["SETS", "MUJER", "NIKE"],
        "text": ["El producto es exactamente como lo describen", "Todo el proceso de compra fue sencillo", "Estoy muy contento con mi compra"],
        "names": ["Diego Ramírez", "Claudia López", "Andrés Salazar"],
        "ocupation": ["Empresario", "Veterinario", "Estilista"]
    },
    {
        "_id": 13,
        "name": "FALDA DEPORTIVA NIKE NARANJA",
        "imgprincipalUrl": "img/FaldaDepNN.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Falda deportiva Nike en color naranja, hecha de tela buz. Disponible en tallas S, M y L, es perfecta para quienes buscan un diseño deportivo y cómodo.",
        "imgsecundary": "img/faldanikenaranja2.png",
        "imgter": "img/faldanikenaranja3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "NARANJA",
        "talla": ["S", "M", "L"],
        "categories": ["FALDAS", "MUJER", "NIKE"],
        "text": ["Me encanta la calidad, se nota que es premium", "Servicio al cliente muy profesional", "Una experiencia de compra muy positiva"],
        "names": ["Natalia Sánchez", "Sergio Castro", "Elena Vargas"],
        "ocupation": ["Periodista", "Músico", "Psicólogo"]
    },
    {
        "_id": 14,
        "name": "FALDA DEPORTIVA NIKE VERDE",
        "imgprincipalUrl": "img/FaldaNV.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Falda deportiva Nike en color verde, fabricada con tela buz. Disponible en tallas S, M y L, ofrece estilo y comodidad para tus entrenamientos.",
        "imgsecundary": "img/faldanikeverde2.png",
        "imgter": "img/faldanikeverde3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "VERDE",
        "talla": ["S", "M", "L"],
        "categories": ["FALDAS", "MUJER", "NIKE"],
        "text": ["El producto superó mis expectativas", "La entrega fue rápida y eficiente", "Recomiendo este sitio sin duda"],
        "names": ["Javier Ortega", "Camila Morales", "José Hernández"],
        "ocupation": ["Contador", "Diseñadora", "Chef"]
    },
    {
        "_id": 15,
        "name": "FALDA DEPORTIVA NIKE MORADA",
        "imgprincipalUrl": "img/FaldaNM.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Falda deportiva Nike en color morado, hecha de tela buz. Disponible en tallas S, M y L, combina confort y diseño deportivo para tus actividades físicas.",
        "imgsecundary": "img/faldanikemorada2.png",
        "imgter": "img/faldanikemorada3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "MORADO",
        "talla": ["S", "M", "L"],
        "categories": ["FALDAS", "MUJER", "NIKE"],
        "text": ["El diseño es increíble y se ajusta perfectamente", "La experiencia de compra fue muy agradable", "Definitivamente volveré a comprar aquí"],
        "names": ["Lucía Fernández", "Mateo López", "Ana Ruiz"],
        "ocupation": ["Arquitecta", "Programador", "Enfermera"]
    },
    {
        "_id": 16,
        "name": "FALDA DEPORTIVA NIKE NEGRA",
        "imgprincipalUrl": "img/FaldaNN.png",
        "price": 10900,
        "pricepromo": 0,
        "stock": "Disponible",
        "description": "Falda deportiva Nike en color negro, hecha de tela buz. Disponible en tallas S, M y L, ideal para quienes buscan un diseño versátil y cómodo para el deporte.",
        "imgsecundary": "img/faldanikenegra2.png",
        "imgter": "img/faldanikenegra3.png",
        "tiempoEntrega": "3 DIAS",
        "gastoenvio": 3000,
        "valoracion": "⭐⭐⭐⭐⭐",
        "envio": ["Envio Postal", "Recogida en tienda"],
        "garantia": "1 MES",
        "subdescription": "NEGRO",
        "talla": ["S", "M", "L"],
        "categories": ["FALDAS", "MUJER", "NIKE"],
        "text": ["Estoy muy satisfecho con la compra, vale cada centavo", "La atención al cliente fue excepcional", "El producto llegó en perfectas condiciones y a tiempo"],
        "names": ["Alejandro Pérez", "Sofía Martínez", "Carlos Gómez"],
        "ocupation": ["Ingeniero", "Doctora", "Abogado"]
    }

]