export default function getSectionName(date) {
    const day = new Date(date);
    if (day.getDay() === 6) {
        return 'A';
    } else if (day.getDay() % 2 === 0) {
        return 'B';
    } else {
        return 'A'
    }
}