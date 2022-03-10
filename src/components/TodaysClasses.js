import { Box, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import getSectionName from '../helper/getSectionName'

export const TodaysClasses = ({ holiday, days }) => {
	return (
		<>
			{
				holiday != null ?
					<Box my="12">
						<Heading>No Classes Today.</Heading>
						<Text>Reason: {holiday.name}.</Text>
					</Box> : ''
			}
			<ClassTable days={days} />
		</>
	);
}


function ClassTable({ days }) {
	console.log(days);
	return (
		<>
			<Heading fontSize="sm" my="4">Next Class</Heading>
			<Heading fontSize="sm" mb="4">12/02/22, Section {getSectionName()}</Heading>
			<Table size="sm" p="0" m="0">
				<Thead>
					<Tr>
						<Th colSpan="2">Time</Th>
						<Th>Subject</Th>
						<Th>Teacher</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>8.45</Td>
						<Td>9.30</Td>
						<Td>Business</Td>
						<Td>MI</Td>
					</Tr>
					<Tr>
						<Td>9.30</Td>
						<Td>10.15</Td>
						<Td>Computer</Td>
						<Td>SJT</Td>
					</Tr>
					<Tr>
						<Td>10.15</Td>
						<Td>11.00</Td>
						<Td>Accounting</Td>
						<Td>MZ</Td>
					</Tr>
				</Tbody>
			</Table>
		</>
	);
}