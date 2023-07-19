import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            {children}
        </div>
    )
}
