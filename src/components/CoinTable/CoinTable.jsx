import React from 'react'
import s from './CoinTable.module.scss'

const CoinTable = ({ coins }) => {
	console.log(coins)
	return (
		<table className={s.iksweb}>
			<thead>
				<tr>
					<th style={{textAlign: 'left'}}>Наименование</th>
					<th>Валюта</th>
					<th>Стоимость</th>
					<th>Изменение цены за 24 ч.</th>
					<th>В обороте за 24 ч.</th>
				</tr>
			</thead>
			<tbody>
				{
					coins.map((coin, index) => (
						<tr className={index % 2 === 0 ? s.second : s.first}>
							<td>
								<div className={s["coin-title"]}>
									<img src={coin.image} alt={coin.name} />
									<h3>{coin.name}</h3>
									<p>{coin.symbol}</p>
								</div>
							</td>
							<td>{coin.current_price} $</td>
							<td className={coin.market_cap_change_percentage_24h > 0 ? s.up : s.low}>{coin.market_cap_change_percentage_24h}</td>
							<td className={coin.price_change_percentage_24h > 0 ? s.up : s.low} >{coin.price_change_percentage_24h}</td>
							<td>{coin.total_volume} $</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}

export default CoinTable