import React, { useEffect } from 'react'

import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { getUserFriends, getRecommendedUsers, getOutgoingFriendRequests } from '../lib/api'
import useSendFriendRequest from '../hooks/useSendFriendRequest'
import { Link } from 'react-router'
import { Users } from 'lucide-react'

const HomePage = () => {

    const queryClient = useQueryClient()

    const [outgoingRequestIDs, setOutgoingRequestIDs] = React.useState(new Set())


    const { data: friends = [], isLoading: loadingFriends } = useQuery({
        queryKey: ['Friends'],
        queryFn: getUserFriends,
    })

    const { data: recommendedUsers = [], isLoading: loadingRecommendedUsers } = useQuery({
        queryKey: ['recommendedUsers'],
        queryFn: getRecommendedUsers,
    })


    const { data: outgoingFriendRequests } = useQuery({
        queryKey: ['outgoingFriendRequests'],
        queryFn: getOutgoingFriendRequests,
    })


    const { mutate: sendFriendRequestMutation, isPending, error } = useSendFriendRequest()


    useEffect(() => {
        const outgoingIDs = new Set()
        outgoingFriendRequests?.forEach((user) => {
            outgoingIDs.add(user._id)
        })
        setOutgoingRequestIDs(outgoingIDs)

    }, [outgoingFriendRequests])




    return (
        <div className='p-4 sm:p-6 lg:p-8'>
            <div className='container mx-auto space-y-10'>
                <div className='flex flex-col sm:flex-row items-start justify-between sm:items-center gap-4'>
                    <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>Your Friends</h2>
                    <Link to="/notifications" className='btn btn-outline btn-sm'>
                        <Users className='w-4 h-4 mr-2' />
                        Friend Requests
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default HomePage