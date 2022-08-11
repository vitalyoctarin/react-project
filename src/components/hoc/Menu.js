import React, {useEffect, useState} from 'react';
import CardList from "../Card/CardList";
import axios from "axios"

const Menu = () => {

    const fetchMenuData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                res.data.length = 10
                setMenuItems(res.data)
            },)
    }

    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetchMenuData()
    },[])

    return (
        <div>
            {
                menuItems.length != 0
                    ?
                        <CardList data={menuItems}/>
                    :   ""
            }
        </div>
    );
};

export default Menu;