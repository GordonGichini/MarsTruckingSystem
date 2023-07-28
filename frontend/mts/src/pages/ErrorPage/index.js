import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div style={{ flex: 1 }}>
      <h2>Kula sembe Error</h2>
      <Link to="/">Back Home</Link>
    </div>
  )
}

export default ErrorPage