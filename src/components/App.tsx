import React from 'react'
import styled from 'styled-components'

const Modal = () => {
  const onModalClick = (target: any) => {
    console.log('e::: ', target.children)
  }

  const TargetModal = styled.div`
    cursor: point;
    background: green;
  `

  return (
    <>
      <TargetModal onClick={(e) => onModalClick(e.target)} />
    </>
  )
}

export default Modal
