import { MongoClient, Db, Collection } from "mongodb";

const uri = "mongodb+srv://twosich12:<password>@cluster0.ys3bn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "todofulbo";
let db: Db;
const collections: Map<string, Collection<any>> = new Map();

export async function connetcToMongoDB(): Promise<void> {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
    } catch (error) {
        throw error;
    }
}

export function getCollection<T>(name: string): Collection<any> {
    if (!db) {
        throw new Error("Sin conexion a la DB");
    }
    if (collections.has(name)) {
        return collections.get(name) as Collection<any>;
    }
    const collection = db.collection<any>(name);
    collections.set(name, collection);
    return collection;
}

export const productos = [
    { 
        nombre: "Camiseta Selección Argentina 2024 local",
        id: 1,
        precio: 25.000,
        descripcion: " Diseñada para hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. La insignia de campeón del Mundo y la tercera estrella sobre el escudo confirman una victoria memorable.",
        imagen: "https://soccerpost.com/cdn/shop/files/ScreenShot2024-03-27at12.02.07PM_clipped_rev_1.png?v=1711736920"
    }
    ,
    {
        nombre: "Camiseta Juventus Adidas 2017/18 local",
        id: 2,
        precio: 15.000,
        descripcion: "Esta camiseta de fútbol para hombre se inspira en el diseño de la primera equipación y actualiza las míticas rayas blancas y negras del club turinés. Presenta un panel rectangular de color negro en la espalda que mantiene vivo el legado de la Juventus.",
        imagen: "https://www.pngegg.com/es/png-hobol"
    }
    ,
    {
        nombre: "Camiseta Ajax Adidas 2017/18 local",
        id: 3,
        precio: 15.000,
        descripcion: "El diseño posee los laterales y las mangas en blanco y lleva la franja vertical roja en el centro, fiel a su tradición se incluyen las tres x de San Andrés de la bandera de Amsterdam en lo alto de la espalda.",
        imagen: "https://www.pngwing.com/es/free-png-hwwbc"
    }
    ,
    {
        nombre: "Camiseta Liverpool New Balance 2017/18 local",
        id: 4,
        precio: 15.000,
        descripcion: "Es un tributo a los colores icónicos del club: rojo y blanco. Además de ser visualmente impresionante, la camiseta está diseñada para ofrecer comodidad y rendimiento en el campo de juego. Ya sea para ver el partido en casa o para jugar una partida con amigos, la camiseta de fútbol de New Balance Liverpool es una adición imprescindible para cualquier colección de ropa deportiva.",
        imagen: "https://www.pngwing.com/es/free-png-maqsf"

    }
    ,
    {
        nombre: "Camiseta AC Milan Adidas 2017/18 local",
        id: 5,
        precio: 15.000,
        descripcion: "Presenta un diseño clásico con rayas verticales rojas y negras, características emblemáticas del club. El cuello es redondo y tiene detalles en negro. Las mangas son rojas, con un pequeño borde negro. En el pecho se encuentra el logo de Puma, el patrocinador Fly Emirates y el escudo del club. Además, se destacan los detalles en dorado en el escudo y el logo de Puma, lo que le da un toque de distinción a la camiseta. Este diseño combina tradición y modernidad, manteniendo la identidad del equipo.",
        imagen: "https://www.pngwing.com/es/free-png-ygpol"
    }
    ,
    {
        nombre: "Camiseta AC Milan Adidas 2017/18 visitante",
        id: 6,
        precio: 15.000,
        descripcion: "El tejido mantiene su frescura tanto si estás animando en las gradas como si estás jugano en el campo",
        imagen:"https://www.pngwing.com/es/free-png-srrlj"
    }
    ,
    {
        nombre: "Camiseta Chelsea FC Nike 2016/17 local",
        id: 7,
        precio: 15.000,
        descripcion: "tiene un diseño sencillo y elegante, con un tono azul clásico. Presenta un cuello en forma de V en color azul más oscuro. Las líneas de diseño son limpias, con un acabado liso en todo el cuerpo. El logo de Nike está en el lado derecho del pecho, mientras que el escudo del Chelsea se encuentra en el lado izquierdo. El patrocinador principal, Yokohama, aparece en el centro del pecho en letras blancas. La camiseta tiene un estilo moderno, pero mantiene la esencia tradicional del club.",
        imagen: "https://www.pngwing.com/es/free-png-xkesd"  
    }
    ,
    {
        nombre: "Camiseta SL Benfica Adidas 2016/17 local",
        id: 8,
        precio: 15.000,
        descripcion: "Presenta un diseño clásico con el característico color rojo del club, tiene un cuello redondo blanco con detalles en rojo, y las mangas son del mismo color rojo con un borde blanco. El escudo del Benfica se encuentra en el lado izquierdo del pecho, mientras que el logo de Adidas está en el derecho. En el centro del pecho está el patrocinador principal, en letras blancas. El diseño es simple, elegante y mantiene la identidad del club, con un toque moderno en los detalles.",
        imagen: "https://www.pngwing.com/es/free-png-cglii"
    }
    ,
    {
        nombre: "Camiseta Borussia Dortmund Puma 2016/17 local",
        id: 9,
        precio: 15.000,
        descripcion: "Con un diseño llamativo y moderno, característico del estilo del club. La camiseta tiene un color amarillo brillante como base, con detalles en negro. El diseño es asimétrico, con una franja diagonal de color negro que recorre el lado derecho del torso, dando un toque dinámico y distintivo. El cuello es en forma de V de color negro, y las mangas también son amarillas con un borde negro en los puños. El escudo del Borussia Dortmund se encuentra en el lado izquierdo del pecho, mientras que el logo de Puma está en el derecho. El patrocinador principal, Evonik, se presenta en el centro del pecho en color blanco. Este diseño mezcla tradición con elementos contemporáneos, haciendo que la camiseta sea moderna y fiel a los colores icónicos del equipo.",
        imagen: "https://www.pngwing.com/es/free-png-dccsx"
    }
    ,
    {
        nombre: "Camiseta Selección de Países Bajos Nike 1998 local (retro)",
        id: 10,
        precio: 40.000,
        descripcion: "La primer camiseta retro que llegó al catálogo de Todofulbo, siendo una camiseta de color naranja brillante, con detalles en negro y blanco. El cuello es redondo y de color negro, mientras que las mangas tienen un borde negro, lo que da un contraste elegante al diseño. En el pecho se encuentra el escudo de la Federación Real Neerlandesa de Fútbol (KNVB) en su versión clásica, y el logo de Nike en el lado derecho.",
        imagen: "https://www.pngwing.com/es/free-png-dcndg"
    }
    ,
    {
        nombre: "Camiseta FC Barcelona Nike 2013/14 local",
        id: 11,
        precio: 25.000,
        descripcion: "La camiseta presenta las icónicas rayas verticales rojas y azules, pero con un patrón más delgado y uniforme que en temporadas anteriores. El color azul es predominante, mientras que las rayas rojas se destacan a lo largo del torso y las mangas, en un tono más oscuro en comparación con las de temporadas previas. El cuello es redondo, con un diseño sencillo en azul, y las mangas cuentan con detalles en un azul más oscuro en los bordes. El escudo se encuentra en el lado izquierdo del pecho, mientras que el logo de Nike está en el derecho. En el centro del pecho aparece el patrocinador Qatar Airways en blanco.",
        imagen: "https://www.pngwing.com/es/free-png-kesya"
    }
    ,
    {
        nombre: "Camiseta AS Roma Nike 2017/18 local",
        id: 12,
        precio: 15.000,
        descripcion: "La camiseta es de color rojo burdeos con un sutil degradado hacia el amarillo en los costados y las mangas, lo que le da un toque distintivo. El cuello es tipo V de color rojo, mientras que las mangas tienen un borde amarillo, haciendo contraste con el tono principal de la camiseta. El escudo de la AS Roma está ubicado en el lado izquierdo del pecho, mientras que el logo de Nike se encuentra en el derecho. En el centro del pecho está el patrocinador Qatar Airways, en letras blancas. El diseño se inspira en los colores tradicionales del club y resalta con detalles modernos, manteniendo la identidad histórica del equipo romano.",
        imagen: "https://www.pngwing.com/es/free-png-dwjje"
    }
    ,
    {
        nombre: "Camiseta Manchester United Adidas 2016/17 visitante",
        id: 13,
        precio: 15.000,
        descripcion: "El cuello en forma de V con detalles en rojo y en negro, mientras que las mangas tienen un diseño de color blanco, creando un contraste sutil pero estilizado. El escudo del Manchester United se encuentra en el lado izquierdo del pecho, mientras que el logo de Adidas está en el derecho. En el centro del pecho aparece el patrocinador Chevrolet. Este diseño simple y moderno refleja la elegancia del club, destacando el uso de colores clásicos y detalles sobrios, con un toque contemporáneo en los acabados.",
        imagen: "https://www.pngwing.com/es/free-png-dnvzt"
    }
    ,
    {
        nombre: "Camiseta Selección de Francia Nike 2018 local",
        id: 14,
        precio: 15.000,
        descripcion: "Presenta un diseño elegante y moderno, caracterizado por un tono azul profundo que resalta la identidad del equipo. La camiseta tiene un cuello en forma de V de color azul oscuro, con detalles sutiles en la parte superior del cuello, como una franja roja y blanca, en referencia a los colores de la bandera francesa. El diseño de la camiseta es bastante limpio, con un patrón de pequeñas líneas horizontales en relieve en el torso, lo que le da una textura única y sofisticada sin perder la simplicidad. El escudo de la Federación Francesa de Fútbol (FFF) está en el lado izquierdo del pecho, mientras que el logo de Nike se encuentra en el derecho. En el centro del pecho, debajo del escudo, se encuentra el lema Liberté, Égalité, Fraternité en dorado, un detalle que refuerza la identidad nacional de Francia.",
        imagen: "https://www.pngwing.com/es/free-png-sucep"  
    }
    ,
    {
        nombre: "Camiseta Selección de Japón Adidas 2018 visitante",
        id: 15,
        precio: 15.000,
        descripcion: "El diseño presenta un patrón geométrico sutil en la parte frontal, que recuerda a las olas del mar, un homenaje a la cultura japonesa. El escudo de la Asociación Japonesa de Fútbol se encuentra en el lado izquierdo del pecho, mientras que el logo de Adidas está en el derecho. En el centro, se encuentra el fabricante Adidas en letras rojas. El diseño resalta la identidad cultural japonesa con un estilo contemporáneo y sofisticado.",
        imagen: "https://www.pngwing.com/es/free-png-heins"
    }
];