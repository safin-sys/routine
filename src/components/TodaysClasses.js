import { ClassTable } from './ClassTable';
import { Hero } from './Hero';

export const TodaysClasses = ({ holiday, day, holidayList, friday }) => {
	return (
		<>
			<Hero
				holiday={holiday}
				friday={friday}
			/>
			{
				holiday || friday ?
					'' :
					<ClassTable
						day={day}
						holidayList={holidayList}
					/>
			}
		</>
	);
}