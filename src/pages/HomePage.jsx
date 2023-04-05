import React, { useEffect, useState } from 'react'
import CoinTable from '../components/CoinTable/CoinTable'
import axios from 'axios'

const HomePage = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/')
            .then(res => setCoins(res.data))
    }, [])
    return (
        <div className='container'>
            <h2 className='title'>Список монет</h2>
            <CoinTable coins={coins} />
        </div>
    )
}

export default HomePage