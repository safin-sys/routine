import { Heading, Table, Tbody, Td, Th, Thead, Tooltip, Tr } from '@chakra-ui/react';
import dayjs from 'dayjs';

export const ClassTable = ({ day }) => {
	return (
		<>
			<Heading fontSize="sm" mb="4">{dayjs().format("dddd, DD/MMM/YY")}</Heading>
			<Table size="sm" p="0" m="0">
				<Thead>
					<Tr>
						<Th colSpan="2">Time</Th>
						<Th>Subject</Th>
						<Th>Teacher</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						day && day.map(routine => {
							return (
								<TableRow
									key={routine._key}
									routine={routine}
								/>
							)
						})
					}
				</Tbody>
			</Table>
		</>
	);
};

const TableRow = ({ routine }) => {
	const { subject, teacher, period } = routine;
	const getPeriodTime = (end) => {
		const classStart = dayjs().hour(8).minute(45)
		return dayjs(classStart).add((end ? period : period - 1) * 45, 'm').format("hh:mma");
	}
	function shortenName(name) {
		return name
			.replace(/\b(\w)\w+/g, '$1')
			.replace(/\s/g, '')
			.replace(/\.$/, '')
			.toUpperCase();
	}
	return (
		<Tr>
			<Td>{getPeriodTime()}</Td>
			<Td>{getPeriodTime(true)}</Td>
			<Td>{subject}</Td>
			<Tooltip label={teacher}>
				<Td>{shortenName(teacher)}</Td>
			</Tooltip>
		</Tr>
	)
}