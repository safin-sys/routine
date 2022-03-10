import { useState, useEffect } from 'react';
import { ClassTable } from './ClassTable';
import { NoClass } from './NoClass';

export const TodaysClasses = ({ holiday, days }) => {
	const [friday, setFriday] = useState(null)
	useEffect(() => {
		const day = new Date();
		const isFriday = day.getDay() === 5 ? true : false
		setFriday(isFriday)
	}, [])
	return (
		<>
			{
				friday ?
					<NoClass holiday={holiday} friday={friday} /> :
					holiday != null ?
						<NoClass holiday={holiday} friday={friday} /> : ''
			}
			<ClassTable days={days} />
		</>
	);
}