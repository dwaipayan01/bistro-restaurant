import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./FeatherItem.css";


const FeatherItem = () => {
    return (
        <div className="feather-ground bg-fixed text-white pt-8 py-10">
            <SectionTitle subHeading="Check it out" heading="From our menu "></SectionTitle>
            <div  className="lg:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36 ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="lg:ml-[35px]">
                    <h4 className="font-bold">March 20,2023</h4>
                    <h3 className="uppercase font-bold">Where can i get some?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto animi et veritatis delectus eum alias officia. Soluta, odio adipisci. Neque dolor molestias sint repudiandae ducimus explicabo omnis laudantium beatae a odio, enim fugiat voluptates reiciendis corporis maiores optio quae accusantium debitis aliquid adipisci minus dignissimos? Possimus harum amet iure dolor.</p>
                    <button className="btn btn-outline mt-3 border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeatherItem;