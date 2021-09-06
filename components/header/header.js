import Head from 'next/head'
import Image from 'next/image'

import styles from './header.module.css'
const header = ({ children, logo }) => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				{
					<>
						<Image
							priority
							src={logo}
							className={styles.logo}
							height={18}
							width={109}
							alt="logo"
						/>
					</>
				}
			</div>
			<div className={styles.navContainer}>
				{children}
			</div>
			<div className={styles.hamburgerContainer}>
				<Image
					priority
					src={"/icon-hamburger.svg"}
					className={styles.hamburger}
					height={18}
					width={25}
					alt="hamburger"
				/>
			</div>
		</header>
	);
}

export default header;