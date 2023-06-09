import React from 'react'

const getMouseX = (e: React.MouseEvent) => {
  const target = e.currentTarget
  const bounds = target.getBoundingClientRect()
  return e.clientX - bounds.left
}

export default getMouseX
