import React from 'react'
import s from './CoinTable.module.scss'

const CoinTable = ({ coins }) => {
	console.log(coins)
	return (
		<table className={s.iksweb}>
			<tbody>
				{
					coins.map((coin, index) => (
						<tr className={index % 2 === 0 && s.second}>
							<td>
								<div className={s["coin-title"]}>
									<img src={coin.image} alt="" />
									<h3>{coin.name}</h3>
									<p>{coin.symbol}</p>
								</div>
							</td>
							<td>{coin.current_price}</td>
							<td>{coin.market_cap_change_percentage_24h}</td>
							<td>{coin.price_change_percentage_24h}</td>
							<td>{coin.total_volume}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	)
}

export default CoinTable