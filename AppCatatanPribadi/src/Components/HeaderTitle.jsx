import React from 'react'

function HeaderTitle({children,classname}) {
  return (
    <h1 className={classname}>{children}</h1>
  )
}

export default HeaderTitle
