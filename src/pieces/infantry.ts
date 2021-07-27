import { Piece } from './piece';
import { Setting } from '../setting';

export class Infantry extends Piece {
  firstNum: number
  secondNum:number
  constructor(_turn: boolean,firstNum:number,secondNum:number, _pieceNum: number = 6,) {
    super(_turn, _pieceNum, Setting.PIECES[_pieceNum])
    this.firstNum = firstNum
    this.secondNum = secondNum
    const home = document.getElementById(`mathu${firstNum}${secondNum}`)
    const infantry = document.createElement('div')
    const p = document.createElement("p")
    infantry.appendChild(p)
    p.innerHTML = Setting.PIECES[_pieceNum]
    if (_turn === false) {
      p.classList.add("turn") 
    } else {
      p.classList.add("inner_text")
    }
    infantry.id = "infantry"
    infantry.classList.add("piece")
    home?.appendChild(infantry)
    
    
  }
}

