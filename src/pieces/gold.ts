import { Piece } from './piece';
import { Setting } from '../setting';

export class Gold extends Piece {
  firstNum: number
  secondNum:number
  constructor(_turn: boolean,firstNum:number,secondNum:number, _pieceNum: number = 2,) {
    super(_turn, _pieceNum, Setting.PIECES[_pieceNum])
    this.firstNum = firstNum
    this.secondNum = secondNum
    const home = document.getElementById(`mathu${firstNum}${secondNum}`)
    const gold = document.createElement('div')
    const p = document.createElement("p")
    gold.appendChild(p)
    p.innerHTML = Setting.PIECES[_pieceNum]
    if (_turn === false) {
      p.classList.add("turn") 
    } else {
      p.classList.add("inner_text")
    }
    gold.id = "gold"
    gold.classList.add("piece")
    home?.appendChild(gold)
    
    
  }
}