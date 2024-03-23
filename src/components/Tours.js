import Card from "./Card";


function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Tours With Prasz</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tours)=>{
                        return <Card {...tours} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;