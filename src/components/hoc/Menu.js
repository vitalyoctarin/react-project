import React, {useEffect, useState} from 'react';
import CardList from "../Card/CardList";
import axios from "axios"

const Menu = () => {

    const fetchMenuData = () => {

        setTimeout(async () => {
            await axios.get(`https://jsonplaceholder.typicode.com/photos`)
                .then(res => {
                    res.data.length = 5
                    setMenuItems(res.data)
                    setLoading(false)
                })
        }, 500)

    }

    const [loading, setLoading] = useState(true)
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetchMenuData()
    },[])

    return (
        <div>
            <CardList data={menuItems} loading={loading}/>
            {/*{*/}
            {/*    menuItems.length != 0*/}
            {/*        ?*/}
            {/*            <CardList data={menuItems}/>*/}
            {/*        :   ""*/}
            {/*}*/}
        </div>
    );
};

export default Menu;