'use client';
import { Button, Title1 } from '@fluentui/react-components';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BrandButton } from '@/components/BrandButton';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { useStyles } from '../styles';

const Home: NextPage = () => {
	const styles = useStyles();

	return (
		<>
			<Head>
				<title>Delete Data</title>
			</Head>
			<FluentProvider theme={webLightTheme}>
				{/* <div className={styles.container}> */}
				<BrandButton>A button</BrandButton>
			</FluentProvider>

			{/* </div> */}
		</>
	);
};

export default Home;
