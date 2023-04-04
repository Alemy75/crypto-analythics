import React, { useEffect, useState } from 'react'
import CoinTable from '../components/CoinTable/CoinTable'
import axios from 'axios'

const HomePage = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1')
            .then(res => setCoins(res.data))
    }, [])

    console.log(coins)

    return (
        <div className='container'>
            <CoinTable coins={coins}/>
        </div>
    )
}

export default HomePage