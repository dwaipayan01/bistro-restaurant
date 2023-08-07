import MenuItem from "../../Shared/MenuItem/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeatherItem from "../FeatherItem/FeatherItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatherItem></FeatherItem>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;