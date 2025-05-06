import React from 'react'
import { getLanguageFlag } from '../lib/utils.js'
import { Link } from 'react-router'


const FriendCard = ({ friend }) => {
    return (
        <div className="card bg-base-200 hover:shadow-md transition-shadow">
            <div className="card-body p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className='avatar size-12'>
                        <img src={friend?.profilePicture} alt={friend?.name} />

                    </div>
                    <h3 className='font-semibold truncate'>{friend?.name}</h3>
                </div>
                <div className='flex flex-wrap gap-1.5 mb-3'>
                    <span className='badge badge-secondary text-xs'>
                        <img src={getLanguageFlag(friend?.nativeLanguage)} alt={friend?.nativeLanguage} className="inline-block h-3 mr-1" />
                        Native: {friend?.nativeLanguage}
                    </span>
                    <span className='badge badge-secondary text-xs'>
                        <img src={getLanguageFlag(friend?.learningLanguage)} alt={friend?.learningLanguage} className="inline-block h-3 mr-1" />
                        Learning: {friend?.learningLanguage}
                    </span>
                </div>
                <Link to={`/chat/${friend?._id}`} className='btn btn-outline  w-full'>Message</Link>

            </div>
        </div>
    )
}

export default FriendCard