import React, { useState } from 'react'
import './CardContainerComponent.css'
import { Col, Container, Row } from 'react-bootstrap';
import SingleCardComponent from '../SingleCardComponent/SingleCardComponent';
export default function CardContainerComponent() {
    const products = [{
        id:1,
        img:"https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        name:"State of mind watch",
        price:1960,
        description:"The state of mind is lorem There alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
        category:"Watches",
    },
    {
        id:2,
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name:"Nike red Shoes",
        price:1360,
        description:"Shoes Nike red Shoes is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
        category:"Shoes",
    },
    {
        id:3,
        img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name:"JBL Black Headphone",
        price:880,
        description:"JBL Black Headphone is lorem There are many variations of passages of Lorem Ipsum available humour, or randomised words which.",
        category:"Electronics",
    },
    {
        id:4,
        img:"https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        name:"RB Black Glass",
        price:533,
        description:"RB Black Glass is lorem, passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        category:"Glasses",
    },
    {
        id:5,
        img:"https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        name:"Apple MacBook Pro laptop",
        price:19600,
        description:"Apple MacBook Pro laptop is lorem, but the majority have suffered alteration in some form you need to be sure there isn't anything.",
        category:"Electronics",
    },
    {
        id:6,
        img: "https://img.freepik.com/free-photo/office-desktop-with-laptop_23-2148179163.jpg?t=st=1725109406~exp=1725113006~hmac=10fa130d57d0cc4a53f75645cbef1b3ab27aa1c3702bf2b27c1e5056490959dc&w=900",
        name:"Apple Pro laptop",
        price:19600,
        description:"Apple Pro laptop is lorem, but the majority have suffered alteration in some form you need to be sure there isn't anything.",
        category:"Electronics",
    }
    ]


    const [cards , setCards] = useState(products);

    let addNewProduct = () => {
        setCards([
            ...cards,
            {
                id: cards.length + 1,
                img:`/Images/${Math.round(Math.random()*10) + 1}.webp`,
                name:`Electronic Device`,
                price:Math.floor(Math.random() * 1000) + 100,
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing nec nisi malesuada semper. Donec at velit sed dolor vulputate dignissim.",
                category:"Electronics",
                quantity: Math.floor(Math.random() * 10) + 1,
            }
        ])
    }

return (
    <>
    <Container className='mx-auto py-4'>
        <h2 style={{backgroundColor:"#aaa" , cursor: "pointer"}} className=' text-center mx-auto text-white w-25 rounded py-2 shadow fs-1'>Our Products</h2>
        <button className='btn btn-primary mt-3 mx-auto text-center d-flex justify-content-center w-25 py-3 fs-4 fw-medium' onClick={addNewProduct}>Add New Product</button>
        {!cards.length?(<><h1 className='text-center mt-4 mx-auto text-danger'>Loading!</h1></>) : (<><Row>{cards.map((card) => (<Col md={4}><SingleCardComponent key={card.id} card={card}/></Col>))}</Row></>)}
    </Container>
    </>
)
}