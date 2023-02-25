import { Link, useParams } from "react-router-dom"; 

const SingleDog = (props) => {
    const { id } = useParams(); 

    // Find the matching puppy
    function filterDogs() {
        let newDogs = [];
        for (let i=0; i < props.dogData.length; i++ ) {
            if (props.dogData[i].id == id) {
                return props.dogData[i];
            }
        }
    }
    
    let currDog = filterDogs();
    return (
        <section className = "dog-page">
            <Link to={`/dog`} className= "return-home"> Go home! </Link>
            <section className = "dog-info">
                <section className = "dog-text-info">
                    <div>Dog ID: #{currDog.id}</div>
                    <div>Dog Name: {currDog.name}</div>
                    <div>Dog Breed: {currDog.breed}</div>
                </section>
                <img style={{ width: "50vh"}} src={currDog.imageUrl}></img>
            </section>
        </section>
    )
}

export default SingleDog; 