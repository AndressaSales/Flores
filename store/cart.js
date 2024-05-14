const produtos = ref([
    {
        id: 1,
        name: 'Buquê Rosas Azules',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://www.floresfrescasrd.com/wp-content/uploads/2018/10/4A4F966D-2DB8-488F-A2EA-7A469737487D.jpeg',
        preco: '68.90'
    },
    {
        id: 2,
        name: 'Buquê Rosas Vermelhas',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://tessfleur.com.br/wp-content/uploads/2020/02/buque-de-50-rosas.jpeg',
        preco: '70.90'
    },
    {
        id: 3,
        name: 'Buquê Rosas Brancas',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://i1.wp.com/tsujiflores.com.br/wp-content/uploads/2021/04/buque-classico-de-12-rosas-brancas.jpeg?w=2484&ssl=1',
        preco: '79.90'
    },
    {
        id: 4,
        name: 'Orquidea Rosa',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://d1all43rnwxdjh.cloudfront.net/products/125a92e9efda/1189975-lg-pl100.jpg',
        preco: '67.90'
    },
    {
        id: 5,
        name: 'Orquidea Branca',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://floresnicte.com.mx/wp-content/uploads/2018/10/Arreglo-floral-de-rosas-y-orquideas-3.png',
        preco: '68.90'
    },
    {
        id: 6,
        name: 'Buquê Rosas Amarelas',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://www.ecompletocdn.com.br/i/fp/1606/700172_2_1453387503.jpg',
        preco: '73.90'
    },
    {
        id: 7,
        name: 'Buquê Girassol',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://www.ecompletocdn.com.br/i/fp/1606/604951_2_1449757705.jpg',
        preco: '75.90'
    },
    {
        id: 8,
        name: 'Buquê Rosas brancas com Chocolate',
        decricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. distinctio, soluta repellendus sapiente!',
        url: 'https://innovacestas.com.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-04-28-at-7.57.34-PM-1.jpeg',
        preco: '115.99'
    }
])

const valores = ref([])

export const cart = () => {

    function add(produto){
        const inValores = valores.value.some(o => o.id === produto.id)
        if(!inValores){
            valores.value.push(produto)
        }

        //valores.value.push(produto)
    }

    function remove(id){
        const index = valores.value.findIndex(o => o.id === id)
        valores.value.splice(index, 1)
    }
    
    const quantidade = computed(()=>{
        return valores.value.length
    })

    const total = computed(()=>{
        return valores.value.reduce((acc, produto)=> acc + parseFloat(produto.preco), 0).toFixed(2)
    })

    return {
        produtos,
        valores,
        add,
        remove,
        quantidade,
        total
    }
}