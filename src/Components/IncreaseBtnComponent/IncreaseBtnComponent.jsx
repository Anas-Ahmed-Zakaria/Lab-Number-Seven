import React from 'react'
import './IncreaseBtnComponent.css'
import { Button } from 'react-bootstrap'
export default function IncreaseBtnComponent({card}) {
return (
    <>
    <Button style={{width: "40px" , height: "40px" , borderRadius: "50%"}} className='fs-5 increaseBtn bg-warning d-flex justify-content-center align-items-center'>+</Button>
    </>
)
}
