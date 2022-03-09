import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export const TodaysClasses = () => {
	return (
		<Table size="sm">
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
					<Td>Mohammad Ibrahim</Td>
				</Tr>
				<Tr>
					<Td>9.30</Td>
					<Td>10.15</Td>
					<Td>Computer</Td>
					<Td>Sharmin Jahan Tania</Td>
				</Tr>
				<Tr>
					<Td>10.15</Td>
					<Td>11.00</Td>
					<Td>Accounting</Td>
					<Td>Md. Moniruzzaman</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}
