import { Box, Heading, Text } from '@chakra-ui/react';

export const NoClass = ({ holiday, friday }) => {
	return (
		<Box my="12">
			<Heading>No Classes Today.</Heading>
			<Text>Reason: {friday ? "It's Friday" : holiday.name}.</Text>
		</Box>
	);
}
