import Card from "./Card";

function App() {
    return (
        <div className="container">
            <Card path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG" name="Pizza Hut" status="oneline" rating="4" />

            <Card path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eohdm5sdnq6e2u46xeux" name="Raimens Cafe 79" status="offline" rating="3" />
            <Card path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh" name="Dev International" status="oneline" rating="5" />



        </div>

    )
}


export default App;