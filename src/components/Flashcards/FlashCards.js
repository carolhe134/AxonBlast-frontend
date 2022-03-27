import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import HomeBtn from '../HomePage/HomeBtn'
import { useState } from 'react'

const FlashCards = ({flashcard, handleNext, cardText, color, flipCard}) => {

  return (
    <>
      <div className="center">
        <Card
          style={{ width: '18rem' }}
          className={`mb-2 p-3 mb-2 bg-${color} text-white`}
        >
          <Card.Header>FlashCard</Card.Header>
          <Card.Body>
            <Card.Text>
              {cardText}
            </Card.Text>
            <button className="btn" 
            onClick={flipCard}>
              FLIP</button>
            <button className="btn-r" 
            onClick={() => handleNext(Math.floor(Math.random() * 3) + 1)}>
              NEXT</button>
          </Card.Body>
        </Card>
      </div>
      <HomeBtn css="btn-home"/>
    </>
  )
}

export default FlashCards