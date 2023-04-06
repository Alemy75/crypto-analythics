import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

const CoinChart = ({id, btcName}) => {
    const [days, setDays] = useState(14)

    console.log(name)

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{
            label: "Loading",
            data: [],
        }]
    })

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
            .then(res => {
                setChartData({
                    labels: res.data.prices.map((item, index) => index).reverse(),
                    datasets: [{
                        label: `${btcName}`,
                        data: res.data.prices.map(item => item[1]),
                        fill: true,
                        borderWidth: 1,
                        tension: 0

                    }]
                })
            })
    }, [days])

    return (
        <div style={{width: '50%'}}>
            <Line data={chartData}/>
            <button className='btn-grad' onClick={() => setDays(30)}>За 30 дней</button>
            <button className='btn-grad' onClick={() => setDays(14)}>За 14 дней</button>
        </div>
    );
};

export default CoinChart;