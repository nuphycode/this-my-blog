// import { parseISO, format } from "date-fns";

// type Props = {
//   dateString: string;
// };

// const DateFormatter = ({ dateString }: Props) => {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
// };

// export default DateFormatter;


import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | Date;
};

const DateFormatter = ({ dateString }: Props) => {
  try {
    let date: Date;
    let dateTimeString: string;

    // Обрабатываем разные типы входных данных
    if (dateString instanceof Date) {
      date = dateString;
      dateTimeString = dateString.toISOString();
    } else if (typeof dateString === "string") {
      date = parseISO(dateString);
      dateTimeString = dateString;
    } else {
      console.error("Invalid dateString type:", typeof dateString);
      return null;
    }

    // Проверяем что дата валидна
    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return null;
    }

    return <time dateTime={dateTimeString}>{format(date, "LLLL d, yyyy")}</time>;
  } catch (error) {
    console.error("Error formatting date:", error, "dateString:", dateString);
    return null;
  }
};

export default DateFormatter;