import React from 'react'

const Modal = () => {
  const onModalClick = (target: any) => {
    console.log('e::: ', target.children)
  }

  return (
    <>
      <div onClick={(e) => onModalClick(e.target)} className='target-modal'>
        <div>hola</div>
      </div>
    </>
  )
}

export default Modal
