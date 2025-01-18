import { NextResponse } from 'next/server'

export const withApiHandler = <T extends (...args: any[]) => Promise<any>>(request: T) => {
    return async (...params: Parameters<T>) => {
        try {
            const result = await request(...params)

            return result
        } catch (error) {
            console.log(error)

            return NextResponse.json({ error: (error as Error)?.message || 'unknown error' }, { status: 500 })
        }
    }
}

export const fetchHandler = async <T extends Record<string, any>>(url: string, options?: RequestInit): Promise<T> => {
    try {
        const isServer = typeof window === 'undefined'
        const apiUrl = isServer ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${url}` : `/api${url}`

        console.log('apiUrl', apiUrl)

        const response = await fetch(apiUrl, options)

        if (response.ok) {
            return response.json() as Promise<T>
        }

        console.log('response', response)

        return { statusText: response.statusText } as any
    } catch (error) {
        console.log(error)
        throw error
    }
}
