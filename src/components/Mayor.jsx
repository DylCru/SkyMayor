import React, {useState, useEffect} from "react";


export default function Mayor() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("api.hypixel.net/resources/skyblock/election")
        .then(res => res.json())
        .then(data => setData(data.current))
    }, [])
}