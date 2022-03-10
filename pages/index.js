import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import client from '../src/helper/sanity'
import { TodaysClasses } from '../src/components/TodaysClasses'
import Nav from '../src/components/Nav'

export const getStaticProps = async () => {
	const days = await client.fetch('*[_type == "days"]')
	const holidays = await client.fetch('*[_type == "holidays"]')
	return {
		props: {
			days,
			holidays
		}
	}
}

export default function Home({ days, holidays }) {
	console.log(holidays);
	return (
		<>
			<Head>
				<title>Marketing Routine | Gov. Titumir College</title>
				<meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Nav />
				<TodaysClasses />
			</Container>
		</>
	)
}