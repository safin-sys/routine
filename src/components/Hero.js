import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const Hero = ({ holiday, friday }) => {
	const [msg, setMsg] = useState('Loading...');
	const [isHoliday, setIsHoliday] = useState(null);
	useEffect(() => {
		if (holiday || friday) {
			setMsg("College Close Today.")
			setIsHoliday(true)
		} else {
			setMsg("College Open Today.")
		}
	})
	const holidayReason = () => {
		return friday ? "It's Friday" : holiday.name
	}
	return (
		<Box my="12">
			<Heading>{msg}</Heading>
			{
				isHoliday ?
					<Text>Reason: {holidayReason()}.</Text> :
					<Text>Class starts at 8:45 am</Text>
			}
		</Box>
	);
}
