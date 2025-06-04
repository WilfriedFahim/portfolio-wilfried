// components/ui/FormattedDate.tsx

import { FormattedDateProps } from '@/mock/index'

export default function FormattedDate({ date, format = "fr" }: FormattedDateProps) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return <span>Date invalide</span>;
    }

    const opts: Intl.DateTimeFormatOptions =
        format === "fr"
            ? { day: "2-digit", month: "2-digit", year: "numeric" }
            : format === "en"
                ? { year: "numeric", month: "2-digit", day: "2-digit" }
                : format === "short"
                    ? { year: "2-digit", month: "2-digit" } :
                    { year: "numeric", month: "long", day: "numeric" };
    return (
        <time dateTime={date.toISOString()}>
            {date.toLocaleDateString("fr-FR", opts)}
        </time>
    );
}