import { parseISO, format } from 'date-fns'

export default function Date({ fromString }) {
    const date = parseISO(fromString);
    return <time dateTime={fromString}>{format(date, 'LLLL d, yyyy')}</time>
}