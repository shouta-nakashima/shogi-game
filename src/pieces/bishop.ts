import { Piece } from './piece';
import { Setting } from '../setting';

export class Bishop extends Piece {
  firstNum: number
  secondNum:number
  constructor(_turn: boolean,firstNum:number,secondNum:number, _pieceNum: number = 1,) {
    super(_turn, _pieceNum, Setting.PIECES[_pieceNum])
    this.firstNum = firstNum
    this.secondNum = secondNum
    const home = document.getElementById(`mathu${firstNum}${secondNum}`)
    const bishop = document.createElement('div')
    const p = document.createElement("p")
    bishop.appendChild(p)
    p.innerHTML = Setting.PIECES[_pieceNum]
    if (_turn === false) {
      p.classList.add("turn") 
    } else {
      p.classList.add("inner_text")
    }
    bishop.id = "bishop"
    bishop.classList.add("piece")
    home?.appendChild(bishop)
    
    
  }
}