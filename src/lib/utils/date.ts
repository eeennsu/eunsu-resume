import dayjs from 'dayjs'

export const getEstimatedDuration = (startDate: string, endDate: string, offsetDay = 15) => {
    const diffMonth = dayjs(endDate).diff(dayjs(startDate), 'month')
    const diffDays = dayjs(endDate).diff(dayjs(startDate), 'day')

    if (diffMonth < 1) {
        return diffDays >= offsetDay ? 1 : 0
    }

    const remainingDays = diffDays - diffMonth * 30

    return remainingDays > offsetDay ? diffMonth + 1 : diffMonth
}
