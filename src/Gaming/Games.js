import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import tetris from '../images/tetris.jpg'
import Sudoku from '../images/Sudoku.png'


class Games extends Component {


        render() {
          return (
            <CardDeck style={{ width: '25rem' }} className="mb-2">
            <Card > 
            <Card.Img  src={tetris} />
            <Card.Body>
            <Card.Title>Tetris</Card.Title>
            <Card.Text> 
                This is a old Tetris game I've made.
            </Card.Text>
            <Card.Link href="https://rnunez6.github.io/Tetris/index.html" target="_blank">Tetris Link</Card.Link>
            </Card.Body>
            <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
            <Card>
            <Card.Img src={Sudoku}/>
            <Card.Body>
            <Card.Title>Sudoku</Card.Title>
            <Card.Text> 
                An old Sudoku game.
            </Card.Text>
            <Card.Link href="https://rnunez6.github.io/Sudoku/" target="_blank">Sudoku Link</Card.Link>
            </Card.Body>
            <Card.Footer>
             <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>
    
            </CardDeck>

            

          ) 

        }
}
 
export default Games;