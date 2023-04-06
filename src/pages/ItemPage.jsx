import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CoinChart from "../components/CoinChart/CoinChart.jsx";

const ItemPage = () => {
    const { id } = useParams()

    const [coin, setCoin] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/`)
            .then(res => setCoin(res.data))
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>{coin.name}</h2>
            <div className="breadcrumbs">
                <Link to='/'>Cписок монет</Link>
                <span> / {coin.name}</span>
            </div>
            <p style={{ marginTop: 14 }}>Диаграмма рынка</p>
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: "wrap"}}>
                <CoinChart btcName={coin.name} id={id} />
                <CoinChart btcName={coin.name} id={id} />
                <CoinChart btcName={coin.name} id={id} />
                <CoinChart btcName={coin.name} id={id} />
            </div>
        </div>
    );
};

export default ItemPage;