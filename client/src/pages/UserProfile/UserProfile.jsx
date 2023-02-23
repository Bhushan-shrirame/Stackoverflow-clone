import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import {auth} from './firebase'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth"

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'
import { verifyuser } from '../../api'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user.id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)

    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async () => {
       try {
          const result = await signInWithPopup(auth , googleProvider)
          console.log("result",result.user)
          verifyuser({verified: result.user.emailVerified , id: id})
       } catch (error) {
         console.log(error)
       }
    }

    const [user , loading ] = useAuthState(auth);
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                
                                
                                
                                {
                                    !currentProfile.verified
                                    ? (
                                        <button type='button' onClick={GoogleLogin} className='edit-profile-btn'>
                                            <FontAwesomeIcon icon={faPen} /> Verify Account
                                        </button>
                                    ) : (<button type='button'  className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} /> Verified
                                </button>)
                                }
                                
                            </div>
                            
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                                </button>
                            ) 
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                            ) : (
                                <ProfileBio currentProfile={currentProfile}/>
                            )
                        }
                    </>
                </section>
            </div>
        </div>
    )
}

export default UserProfile
