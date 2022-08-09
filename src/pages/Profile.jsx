import { getAuth, updateProfile } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

function Profile() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData

  const onSubmit = () => {}

  const onLogOut = () => {
    auth.signOut()
    navigate('/')
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogOut}>
          Log Out
        </button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState) => !prevState)
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
        <div className="profileCard">
          <form action="">
            <input
              id="name"
              type="text"
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input id="" type="text" />
          </form>
        </div>
      </main>
    </div>
  )
}

export default Profile
