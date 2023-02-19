import { lazy } from 'react'
import { Navigate } from "react-router-dom";

const AllMeetupsPage = lazy(() => import('../pages/all-meetups'))
const FavoritesPage = lazy(() => import('../pages/favorites'))
const NewMeetupPage = lazy(() => import('../pages/new-meetups'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/all-meetups"></Navigate>
  },
  {
    path: '/all-meetups',
    element: <AllMeetupsPage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
  {
    path: '/new-meetup',
    element: <NewMeetupPage />
  },
]

export default routes
