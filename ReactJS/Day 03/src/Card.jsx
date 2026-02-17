function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.path} alt="" />
            <div className="overview">
                <h3>{props.name}</h3>
                <p>4.3 • 50-60 mins</p>
                <p>
                    Pizzas
                    <br />
                    Chhindwara City</p>
                <span>{props.rating >= 4 ? "Top Resturent" : ""}</span>
                <span></span>
            </div>
            <button className="statusBadge" style={{ background: props.status == "oneline" ? "green" : "red" }}>{props.status}</button>





        </div>
    )

}


export default Card;