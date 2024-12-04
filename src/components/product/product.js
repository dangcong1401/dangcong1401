export default function Product(props){
    const p = props.Product
    return (
        <div className="product">
            <h2>{p.name}</h2>
            <p>gia: {p.price}$</p>
            <p></p>
        </div>
    )
}