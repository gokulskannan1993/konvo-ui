import React from 'react'
import { LoaderCircle } from 'lucide-react'

const PageLoader = () => {

    const { authUser, isLoading } = useAuthUser();
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <LoaderCircle className='animate-spin text-primary size-11' />
        </div>
    )
}

export default PageLoader