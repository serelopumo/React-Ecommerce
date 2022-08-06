import Tetera from './images/tetera.png';
import Tetera2 from './images/taza.png';
import Taza from './images/tetera2.png';
import GreenTea from './images/greentea.png';
import Macaron from './images/macaron.png';
import OrangeTea from './images/orangetea.png';
import RedTea from './images/redtea.png';
import WhiteTea from './images/whitetea.png';

const products = [
    {
        id:'1',
        tittle: 'Tetera',
        tittleResumido: 'Tetera',
        description: `Tetera de cerámica artesanal. El precio Incluye 1 tetera con 1 taza`,
        price: '$3000',
        pictureUrl: Tetera,
        category: 'teteras',
        stock:5
    },
    {
        id:'2',
        tittle: 'Taza',
        tittleResumido: 'Taza',
        description: 'Taza de porcelana artesanal. Incluye 1 taza y 1 plato',
        price: '$2000',
        pictureUrl: Tetera2,
        category: 'teteras',
        stock:3
    },
    {
        id:'3',
        tittle: 'Set Aternoon Tea',
        tittleResumido: 'Set Aternoon Tea',
        description: 'Set para disfrutar de un Afternoon Tea. Incluye set de 1 taza, 1 plato, 1 tetera y 1 azucarera',
        price: '$3000',
        pictureUrl: Taza,
        category: 'teteras',
        stock:6
    },
    {
        id:'4',
        tittle: 'White Tea - Sweet Vainilla',
        tittleResumido: 'White Tea',
        description: `El Té Blanco proviene de la misma planta de Té Camellia Sinensis. Se utilizan los capullos y hojas más jóvenes de la planta. No se oxida como el té negro. Se cosechan sus hojas y se dejan secar naturalmente. Las hebras son de color blanco verdoso plateado. Es un té de color amarillo pálido y sabor suave y sutil. Es el té con menos teína y el más antioxidante de todos. Los precios varían de acuerdo a la presentación, calidad y origen. Para prepararlo, colocar una cucharadita, con agua caliente sin hervir y luego de 2' colar y beber.`,
        price: '$1200',
        pictureUrl: WhiteTea,
        category: 'blends',
        stock:8
    },
    {
        id:'5',
        tittle: 'Red Tea - Orange Spice',
        tittleResumido: 'Red Tea',
        description: `El Té Rojo es de Sudáfrica, no contiene teina. Es muy saludable y sabroso. Ideal para niños. Al no contener teína, no es estimulante como el té, así que es ideal para personas nerviosas o con insomnio. Es recomendable una taza antes de ir a dormir. Es antioxidante, asi que ayuda a no envejecer. Es diurético suave y digestivo. Para prepararlo, colocar una cucharadita de rooibos, con agua caliente sin hervir y luego de 5' colar y beber.`,
        price: '$1200',
        pictureUrl: OrangeTea,
        category: 'blends',
        stock:10
    },
    {
        id:'6',
        tittle: 'Green Tea - Ginger Lemon',
        tittleResumido: 'Green Tea',
        description: `El Té Verde proviene de la misma planta de Té Camellia Sinensis. Luego de cosechar las hojas se prensan, enrollan y secan. No se oxida como el té negro. Las hebras son de color verde. Es un té de color verde y sabor herbal fresco. Tiene un poco más de teína que el té blanco, pero menos que el negro. Es antioxidante y muy saludable. Los precios varían de acuerdo a la presentación, calidad y origen. Para prepararlo, colocar una cucharadita, con agua caliente sin hervir y luego de 3' colar y beber.`,
        price: '$1200',
        pictureUrl: GreenTea,
        category: 'blends',
        stock:9
    },
    {
        id:'7',
        tittle: 'Black Tea - English Breakfast',
        tittleResumido: 'Black Tea',
        description: `El Té Negro proviene de la misma planta de Té Camellia Sinensis. Luego de cosechar las hojas se marchitan, enrollan, oxidan y secan. Las hebras son de color marrón oscuro casi negro. Es un té de color negro rojizo y sabor fuerte no herbal. Es el té con más teína. Es estimulante y también antioxidante. Los precios varían de acuerdo a la presentación, calidad y origen. Para prepararlo, colocar una cucharadita, con agua caliente sin hervir y luego de 4' colar y beber.`,
        price: '$1200',
        pictureUrl: RedTea,
        category: 'blends',
        stock:8
    },
    {
        id:'8',
        tittle: 'Macarons',
        tittleResumido: 'Macarons',
        description: 'Macarons',
        price: '$900',
        pictureUrl: Macaron,
        category: 'biscuits',
        stock:10
    }
]

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 500)
    })
}
