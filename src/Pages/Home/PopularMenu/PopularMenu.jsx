import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category==="popular");
            setMenu(popularItems);
        })
    },[])
    return (
        <section className="mb-10">
            <SectionTitle heading="From our menu" subHeading="check it out"></SectionTitle>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
                {
                    menu ?.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;