import { Piece } from './piece';
import { Setting } from '../setting';

export class Rook extends Piece {
  firstNum: number
  secondNum:number
  constructor(_turn: boolean,firstNum:number,secondNum:number, _pieceNum: number = 0,) {
    super(_turn, _pieceNum, Setting.PIECES[_pieceNum])
    this.firstNum = firstNum
    this.secondNum = secondNum
    const home = document.getElementById(`mathu${firstNum}${secondNum}`)
    const rook = document.createElement('div')
    const p = document.createElement("p")
    rook.appendChild(p)
    p.innerHTML = Setting.PIECES[_pieceNum]
    if (_turn === false) {
      p.classList.add("turn") 
    } else {
      p.classList.add("inner_text")
    }
    rook.id = "rook"
    rook.classList.add("piece")
    home?.appendChild(rook)
    
    
  }
}