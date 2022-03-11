import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import client from '../src/helper/sanity'
import { TodaysClasses } from '../src/components/TodaysClasses'
import Nav from '../src/components/Nav'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

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
	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const [holiday, setHoliday] = useState(null)
	const [holidayList, setHolidayList] = useState([])
	const [friday, setFriday] = useState(null)
	const dayName = dayNames[dayjs().day()];
	const [day, setDay] = useState(null)

	useEffect(() => {
		const today = new Date();

		const isFriday = today.getDay() === 5 ? true : false
		setFriday(isFriday)

		setHolidayList([])
		for (let i = 0; i < holidays.length; i++) {
			const nestedArr = holidays[i].listOfHolidays
			for (let j = 0; j < nestedArr.length; j++) {
				if (today.setHours(0, 0, 0, 0) == new Date(nestedArr[j]).setHours(0, 0, 0, 0)) {
					setHoliday(holidays[i])
				}
				setHolidayList(prev => [...prev, nestedArr[j]])
			}
		}
	}, [])

	useEffect(() => {
		if (!day) {
			for (let i = 0; i < days.length; i++) {
				if (days[i].name === dayName) {
					setDay(days[i].routine)
				}
			}
		}
	}, [day])

	return (
		<>
			<Head>
				<title>Marketing Routine | Gov. Titumir College</title>
				<meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Nav />
				<TodaysClasses
					holiday={holiday}
					day={day}
					holidayList={holidayList}
					friday={friday}
				/>
			</Container>
		</>
	)
}