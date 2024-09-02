import React from 'react'
import './DecreaseBtnComponent.css'
import { Button } from 'react-bootstrap'
export default function DecreaseBtnComponent({card}) {
return (
    <>
    <Button style={{width: "40px" , height: "40px" , borderRadius: "50%"}} className='decreaseBtn fs-4 bg-warning d-flex justify-content-center align-items-center'>-</Button>
    </>
)
}
