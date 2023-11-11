import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import { GamePage } from '../../pages/game'
import ForumPage from '../../pages/forum/ForumPage'

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>
}

function LoginPage() {
  return <h1>Login Page</h1>
}

function RegisterPage() {
  return <h1>Register Page</h1>
}

function ProfilePage() {
  return <h1>Profile Page</h1>
}

function LeaderboardPage() {
  return <h1>Leaderboard Page</h1>
}

function ForumTopicPage() {
  return <h1>ForumTopic Page</h1>
}

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/forum/:topicId" element={<ForumTopicPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
)
