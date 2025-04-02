type CompanyExperience = {
    companyName: string
    startDate: string
    endDate?: string
    activities: Array<{
        startDate: string
        endDate?: string
        estimatedDuration?: number
        title: string
        doneList: Array<{
            subject: string
            details?: Array<string | { problem: string; solution: string }>
        }>
    }>
    note?: {
        reasonForLeaving: string
    }
}
