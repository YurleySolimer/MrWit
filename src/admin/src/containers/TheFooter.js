import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://mrwit.co" target="_blank" rel="noopener noreferrer">Mr. Wit</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
