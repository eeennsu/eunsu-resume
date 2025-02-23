import Link from 'next/link'
import { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center pt-10'>
            <h2 className='text-3xl font-bold mb-2'>404 - Not Found</h2>
            <p className='text-gray-500 mb-4'>The page you are looking for does not exist.</p>
            <Link
                href='/'
                className='text-blue-500 hover:underline'
            >
                Return Home
            </Link>
        </div>
    )
}

export default NotFound
