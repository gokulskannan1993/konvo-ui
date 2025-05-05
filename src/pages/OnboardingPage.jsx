import { React, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { completeVerfication } from '../lib/api.js'
import { CameraIcon, ShuffleIcon } from 'lucide-react'
import useAuthUser from '../hooks/useAuthUser.js'


const OnboardingPage = () => {
    const { authUser, isLoading } = useAuthUser();

    const queryClient = useQueryClient()

    const [formState, setFormState] = useState({
        name: authUser?.name || '',
        bio: authUser?.bio || '',
        location: authUser?.country || '',
        profilePicture: authUser?.profilePicture || '',
        nativeLanguage: authUser?.nativeLanguage || '',
        learningLanguage: authUser?.learningLanguage || '',
    });

    const { mutate: onboardingMutation, isPending } = useMutation({
        mutationFn: completeVerfication,
        onSuccess: () => {
            toast.success('Verification completed successfully!')
            queryClient.invalidateQueries('authUser')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onboardingMutation(formState)
    }

    const handleRandomAvatar = () => { }



    return (
        <div className="flex items-center justify-center min-h-screen bg-base-100 p-4">
            <div className="w-full max-w-3xl p-6 bg-base-200 card shadow-xl">
                <div className="card-body p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Complete your profile</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Profile picture container */}
                        <div className="flex flex-col items-center justify-center space-y-4">
                            {/* Profile picture preview */}
                            <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                                {formState.profilePicture ? (
                                    <img
                                        src={formState.profilePicture}
                                        alt="Profile"
                                        className="w-full h-full  object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <CameraIcon className="size-12 text-base-content opacity-40" />
                                    </div>
                                )}



                            </div>
                            {/*Generate random avatar button */}
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handleRandomAvatar}
                                    className="btn  btn-accent"
                                >
                                    <ShuffleIcon className="size-4 mr-2" />
                                    Generate New Avatar
                                </button>

                            </div>



                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default OnboardingPage