const Products = ({ state, idProduct }) => {
    const array = Object.values(state)[idProduct].Products
    const newArray = Object.values(array)
    const getProductToBasket = (name, price) => {
        console.log()
        if (localStorage.getItem(name)) {
            let newPrice = +localStorage.getItem(name) + +price
            localStorage.setItem(name, newPrice)
        }
        else {
            localStorage.setItem(name, price)
            localStorage.setItem(name + '1', name)
        }
    }

    const productAll = newArray.map(item => {
        return (
            <div>
                name : {item.name},
                opis : {item.opis},
                price : {item.price}
                <img src={item.pimg} alt={item.name}></img>
                <button style={{ 'width': '50px', 'height': '60px' }} onClick={() => getProductToBasket(item.name, item.price)}>
                    data
                </button>
            </div>
        )
    })
    return (<>
        {productAll}
    </>
    )
}

export default Products