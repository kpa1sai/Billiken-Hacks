import MediaCard from "./mediaCard";
import './Home.css';

const Home = () => {
    return (
            <>
<div className="quote-container">
                <p className="quote">“Money is a terrible master but an excellent servant.”
~P.T. Barnum</p>
            </div>
            <div class="flex-container">
                <div class="flex-item"> <MediaCard text="Home Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Car Loan"/> </div>
                <div class="flex-item"> <MediaCard text="Gold Loan"/> </div>
            </div>
            
            </>

    );
}

export default Home ;