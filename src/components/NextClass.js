import { Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

const NextClass = ({ holidayList }) => {
    const [classDate, setClassDate] = useState(null)
    const today = dayjs()
    useEffect(() => {
        let i = 1;
        const getNextDate = () => {
            if (!holidayList.includes(addToDay(i))) {
                setClassDate(addToDay(i))
            } else {
                i++
                getNextDate()
            }
        }
        getNextDate()
    }, [holidayList])
    const addToDay = (i) => {
        return dayjs(today).add(i, 'day').format("YYYY-MM-DD")
    }
    return (
        <Heading mt="8" fontSize="sm">
            Next Class: {dayjs(classDate).format("dddd, DD/MMM/YY")}
        </Heading>
    );
}

export default NextClass;