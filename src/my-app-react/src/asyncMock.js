const Servicios = [


    {
        titulo: 'Masajes descontracturantes',
        precio: 'Precio: $1900',
        duracion: 'Duracion: 50 minutos',
        incluye: 'Incluye: Bata de seda, toallas de algodon, aceites naturales, masaje piedra caliza',
        img: './images/img-masajes-3.jpg',
        id: 1,
        stock:10

    },
    {
        titulo: 'Masajes Faciales',
        precio: 'Precio: $3300',
        duracion: 'Duracion: 45 minutos',
        incluye: 'Incluye: Bata de seda, toallas de algodon, aceites naturales',
        img: 'images/facial-3.jpg',
        id: 2,
        stock:10
    },
    {
        titulo: 'Servicio de sauna',
        precio: 'precio $: 5800',
        duracion: 'Duracion: 1 horas',
        incluye: 'Incluye: Camara de sauna privada, Bata de seda, toallas de algodon, aceites naturales, cremas exfoliantes',
        img: 'images/Sola-3.jpg',
        id: 3,
        stock:10



    }
]


export const getServicios=()=>{
    return new Promise((resolve)=>{
        setTimeout((resolve)=>{
            resolve(Servicios)
        },2000)

    })

}