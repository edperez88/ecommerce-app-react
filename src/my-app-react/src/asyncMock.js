const Servicios = [


    {
        titulo: 'Masajes descontracturantes',
        precio: 'Precio: $1900 por sesion*',
        duracion: 'Duracion: 50 minutos',
        incluye: 'Incluye: Bata de seda, toallas de algodon, aceites naturales, masaje piedra caliza',
        img: '/images/img-masajes-3.jpg',
        id: '1',
        detalle:'+ info',
        category:'Masajes'

    },
    {
        titulo: 'Masajes Faciales',
        precio: 'Precio: $3300 por sesion*',
        duracion: 'Duracion: 45 minutos',
        incluye: 'Incluye: Bata de seda, toallas de algodon, aceites naturales',
        img: '/images/img-facial-1.jpg',
        id: '2',
        detalle:'+ info',
        category:'Masajes'
    },
    {
        titulo: 'Servicio de sauna',
        precio: 'precio $: 5800 por persona*',
        duracion: 'Duracion: 1 horas',
        incluye: 'Incluye: Camara de sauna privada, Bata de seda, toallas de algodon, aceites naturales, cremas exfoliantes',
        img: '/images/Sola-3.jpg',
        id: '3',
        detalle:'+ info',
        category:'Sauna'



    }
]


export const getServicios=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Servicios)
        },1000)
    })
}

export const getServiciosById=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Servicios.find(service=>service.id===id))
        },1000)
    })
}

export const getServiciosByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Servicios.filter(service=>service.category===categoryId))
        },1000)
    })
}


