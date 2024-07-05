import React from 'react'
import { UserIdProvider } from '../UserIdContext.jsx'
import Problem from './Problem'

function ProblemWrap() {
  return (
    <UserIdProvider>
        <Problem/>
    </UserIdProvider>
    
  )
}

export default ProblemWrap;