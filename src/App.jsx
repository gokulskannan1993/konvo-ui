import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotificatonsPage from './pages/NotificationsPage.jsx'
import CallPage from './pages/CallPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'


const App = () => {
  return (
    <div data-theme="night h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificatonsPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

    </div>
  )
}

export default App
