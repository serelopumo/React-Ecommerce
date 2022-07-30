const products = [
    {
        id:1,
        tittle: 'Tetera',
        description: 'Tetera de cerámica con colador para hebras',
        price: '$3000',
        pictureUrl: 'images/tetera.png'
    },
    {
        id:2,
        tittle: 'Taza',
        description: 'Taza de color verde',
        price: '$2000',
        pictureUrl: '../images/taza.png'
    },
    {
        id:3,
        tittle: 'Set Aternoon Tea',
        description: 'Taza de color verde',
        price: '$2000',
        pictureUrl: '../images/tetera2.png'
    }
]

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },3000)
    })
}