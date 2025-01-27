import dayjs from 'dayjs'

export const getEstimatedDuration = (startDate: string, endDate: string, offsetDay = 10) => {
    const diffMonth = dayjs(endDate).diff(dayjs(startDate), 'month')
    const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day')

    return diffMonth < 1 && diffDays >= offsetDay ? 1 : Math.ceil(diffMonth)
}
