import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('es')

export const dateTime = (date) => dayjs(date).locale('es').format()

export const full = (full)=> dayjs(full).format('YYYY-MM-DD HH:mm:ss');

