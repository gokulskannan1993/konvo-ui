import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { sendFriendRequest } from '../lib/api'

const useSendFriendRequest = () => {
    const queryClient = useQueryClient()
    const { mutate: sendFriendRequestMutation, isPending, error } = useMutation({
        mutationFn: sendFriendRequest,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['outgoingFriendRequests'] })
            toast.success('Friend request sent successfully')
        },
        onError: (error) => {
            toast.error(error.response.data.message)
        }
    })

    return {
        sendFriendRequestMutation,
        isPending,
        error
    }

}

export default useSendFriendRequest