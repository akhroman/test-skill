import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.locale('ru');

export { dayjs };
