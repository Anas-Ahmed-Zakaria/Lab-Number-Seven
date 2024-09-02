import React from 'react'
import './SingleCardComponent.css'
import { Card , Container } from 'react-bootstrap'
import IncreaseBtnComponent from '../IncreaseBtnComponent/IncreaseBtnComponent'
import DecreaseBtnComponent from '../DecreaseBtnComponent/DecreaseBtnComponent'
export default function SingleCardComponent({card}) { 
    console.log(card);
       
return (
    <>
    <Container className='mx-auto mt-5'>
        <Card className='w-100' key={card.id}>
            <Card.Img className='w-100' variant="top" src={card.img} />
            <Card.Body style={{backgroundColor: "#eee"}}>
                <Card.Title style={{width: "fit-content"}} className='text-white bg-warning px-2 py-2 rounded'>{card.name}</Card.Title>
                <Card.Text style={{color: "#333"}} className='fs-6 fw-light'>
                    {card.description}
                </Card.Text>
                <Card.Text style={{width: "fit-content"}} className='text-white bg-danger rounded px-3 py-1 fs-5 fw-bold'>
                    $ {card.price}
                </Card.Text>
                <Card.Text style={{backgroundColor:"#ccc"}} className='d-flex gap-5 mx-auto justify-content-center py-2 rounded-5'>
                    <DecreaseBtnComponent card={card}/>
                    <span className='fs-4 fw-bold'>0</span>
                    <IncreaseBtnComponent card={card}/>
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
    </>
    )
}
