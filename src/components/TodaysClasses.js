import { ClassTable } from './ClassTable';
import { Hero } from './Hero';

export const TodaysClasses = ({ holiday, days, holidayList, friday }) => {
	return (
		<>
			<Hero
				holiday={holiday}
				friday={friday}
			/>
			<ClassTable
				days={days}
				holidayList={holidayList}
			/>
		</>
	);
}