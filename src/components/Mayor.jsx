import React, {useState, useEffect} from "react";


export default function Mayor() {
    const [mayorData, setMayorData] = useState([])

    useEffect(() => {
        fetch("https://api.hypixel.net/resources/skyblock/election")
        .then(res => res.json())
        .then(data => setMayorData(data.mayor))
    }, [])

    return (
        <p>{mayorData.name}</p>
    )
}