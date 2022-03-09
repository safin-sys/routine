import { Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import client from '../src/helper/sanity'
import { TodaysClasses } from '../src/components/TodaysClasses'
import Nav from '../src/components/Nav'
import getSectionName from '../src/helper/getSectionName'

// export const getStaticProps = async () => {
// 	const days = await client.fetch('*[_type == "days"]')
// 	return {
// 		props: {
// 			days
// 		}
// 	}
// }

export default function Home({ days }) {
	return (
		<>
			<Head>
				<title>Marketing Routine | Gov. Titumir College</title>
				<meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Nav />
				<Heading fontSize="md" my="4">Section {getSectionName()}</Heading>
				<TodaysClasses />
			</Container>
		</>
	)
}