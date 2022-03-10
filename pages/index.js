import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import client from '../src/helper/sanity'
import { TodaysClasses } from '../src/components/TodaysClasses'
import Nav from '../src/components/Nav'
import { useState, useEffect } from 'react'

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
	const [holiday, setHoliday] = useState(null)

	useEffect(() => {
		const today = new Date();

		for (let i = 0; i < holidays.length; i++) {
			const nestedArr = holidays[i].listOfHolidays
			for (let j = 0; j < nestedArr.length; j++) {
				if (today.setHours(0, 0, 0, 0) == new Date(nestedArr[j]).setHours(0, 0, 0, 0)) {
					setHoliday(holidays[i])
				}
			}
		}
	}, [])
	
	return (
		<>
			<Head>
				<title>Marketing Routine | Gov. Titumir College</title>
				<meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Nav />
				<TodaysClasses holiday={holiday} days={days} />
			</Container>
		</>
	)
}