import React from 'react'
import s from './Header.module.scss'
import logo from '../../../public/bird-svgrepo-com.svg'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s["header__wrap"]}>
					<div className={s.logo}>
						<img src={logo} alt="" />
						<h1>Crypto Bird</h1>
					</div>

				</div>
			</div>
		</header>
	)
}

export default Header