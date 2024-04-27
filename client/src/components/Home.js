import MediaCard from "./mediaCard";
import './Home.css';

const Home = () => {
    return (
            <>
            
            <div class="flex-container">
                <div class="flex-item"> <MediaCard text="Home Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Car Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Gold Loan"/> </div>
            </div>
            
            </>

    );
}

export default Home ;