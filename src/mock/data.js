export const productos = [
   
    {
        name:'Florero de Cristal',
        category: 'decoracion',
        description: 'Elegante florero de cristal transparente, perfecto para realzar la belleza de tus flores favoritas.',
        price: 50,
        img: 'https://picsum.photos/217',
        stock: 20
    },
    {
        name:'Cuadro Abstracto',
        category: 'decoracion',
        description: 'Cuadro decorativo con un diseño abstracto y moderno, ideal para añadir un toque de arte a tus paredes.',
        price: 80,
        img: 'https://picsum.photos/218',
        stock: 15
    },
    {
        name:'Jarrón de Cerámica',
        category: 'textiles',
        description: 'Jarrón de cerámica esmaltada en tonos pastel, perfecto para dar un toque de color a cualquier espacio.',
        price: 65,
        img: 'https://picsum.photos/201',
        stock: 12
    },
    {
        name:'Espejo Vintage',
        category: 'textiles',
        description: 'Espejo de estilo vintage con marco ornamentado, ideal para añadir elegancia a tu hogar.',
        price: 120,
        img: 'https://picsum.photos/202',
        stock: 8
    },
    {
        name:'Lámpara de Mesa',
        category: 'textiles',
        description: 'Lámpara de mesa con base de madera tallada a mano y pantalla de tela, perfecta para crear una atmósfera acogedora.',
        price: 95,
        img: 'https://picsum.photos/203',
        stock: 10
    },
    {
        name:'Cojín Bordado',
        category: 'amigurumis',
        description: 'Cojín decorativo con bordados florales y detalles en relieve, ideal para añadir un toque de textura a tus sofás.',
        price: 35,
        img: 'https://picsum.photos/204',
        stock: 25
    },
    {
        name:'Reloj de Pared Vintage',
        category: 'amigurumis',
        description: 'Reloj de pared estilo vintage con números romanos y acabado envejecido, perfecto para dar un toque retro a tu hogar.',
        price: 70,
        img: 'https://picsum.photos/205',
        stock: 18
    },
    {
        name:'Candelabro de Metal',
        category: 'amigurumis',
        description: 'Candelabro de metal con diseño elegante y acabado dorado, perfecto para crear un ambiente cálido y sofisticado.',
        price: 55,
        img: 'https://picsum.photos/206',
        stock: 14
    },
    {
        name:'Estatuilla de Buda',
        category: 'nuevos',
        description: 'Estatuilla de Buda en posición de meditación, ideal para añadir un toque de espiritualidad y serenidad a tu hogar.',
        price: 40,
        img: 'https://picsum.photos/207',
        stock: 20
    },
    {
        name:'Manta Tejida a Mano',
        category: 'nuevos',
        description: 'Manta tejida a mano con patrón de rombos, perfecta para añadir calidez y estilo a tus espacios.',
        price: 75,
        img: 'https://picsum.photos/208',
        stock: 16
    },
    {
        name:'Caja de Almacenamiento Vintage',
        category: 'nuevos',
        description: 'Caja de almacenamiento estilo vintage con detalles de encaje y acabado en tonos pastel, ideal para organizar tus objetos con estilo.',
        price: 45,
        img: 'https://picsum.photos/209',
        stock: 22
    },
    {
        name:'Figura Decorativa de Elefante',
        category: 'mas vendidos',
        description: 'Figura decorativa de elefante tallada en madera, perfecta para añadir un toque de exotismo a tu decoración.',
        price: 60,
        img: 'https://picsum.photos/210',
        stock: 18
    },
    {
        name:'Portavelas de Cristal',
        category: 'mas vendidos',
        description: 'Portavelas de cristal con diseño contemporáneo, ideal para crear un ambiente íntimo y relajante.',
        price: 25,
        img: 'https://picsum.photos/211',
        stock: 30
    },
    {
        name:'Tapiz Decorativo',
        category: 'mas vendidos',
        description: 'Tapiz decorativo con estampado bohemio, perfecto para añadir un toque de color y textura a tus paredes.',
        price: 90,
        img: 'https://picsum.photos/212',
        stock: 10
    },
    {
        name:'Sculptura Geométrica',
        category: 'ofertas',
        description: 'Sculptura decorativa con formas geométricas abstractas, perfecta para añadir un toque moderno y artístico a cualquier espacio.',
        price: 85,
        img: 'https://picsum.photos/213',
        stock: 12
    },
    {
        name:'Candelabro de Madera Rústica',
        category: 'ofertas',
        description: 'Candelabro de madera rústica con acabado envejecido, ideal para crear una atmósfera acogedora y natural.',
        price: 55,
        img: 'https://picsum.photos/214',
        stock: 20
    },
    {
        name:'Jarrón de Cerámica con Relieve',
        category: 'ofertas',
        description: 'Jarrón de cerámica con relieve floral, perfecto para realzar la belleza de tus flores favoritas y agregar un toque de elegancia a tu hogar.',
        price: 70,
        img: 'https://picsum.photos/215',
        stock: 15
    }
];
// funcion de todos los productos
export const getProducts= () => {
    return new Promise((resolve,reject) => {
        let error = false
        setTimeout(() => {
            if(error){
                reject("No hay productos")
            }else{
                resolve(productos)
            }
        }, 2000);
    })
}

//funcion del detalle de un producto
export const getOneProduct = (id) => {
    return new Promise((resolve,reject) => {
        let error = false
        setTimeout(() => {
            if(error){
                reject("No existe ese producto")
            }else{
                let oneProduct = productos.find((p) => p.id === id)
                resolve(oneProduct)
            }
        }, 2000);
    })
}
