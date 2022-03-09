export default function getSectionName() {
    const day = new Date();
    const section = day.getDay() % 2 === 0 ? 'B' : 'A';
    return section;
}