import { Box, Heading, Text } from '@chakra-ui/react';

export const Hero = ({ holiday, friday }) => {
	return (
		<Box my="12">
			<Heading>
				{
					holiday || friday ? 'College Close Today.' : 'College Open Today.'
				}
			</Heading>
			{
				friday ?
					<Text>Reason: It&apos;s Friday.</Text> :
					holiday ?
						<Text>Reason: {holiday.name}.</Text> :
						<Text>Class starts at 8:45am</Text>
			}
		</Box>
	);
}
