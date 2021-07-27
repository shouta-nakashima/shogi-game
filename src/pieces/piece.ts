import { Setting } from "../setting"

export class Piece {
  _turn: boolean
  
  _pieceNum: number
  
  _out: string


  constructor(turn: boolean, pieceNum: number, out: string) {
    this._out = out
    this._pieceNum = pieceNum
    this._turn = turn
  }

  public out():string {
    return this._out
  }

  public turn(): boolean {
    return this._turn
  }

  public pieceNum(): number {
    return this._pieceNum
  }
  public create(firstNum: number,secondNum:number,idName:string) {
    const home = document.getElementById(`mathu${firstNum}${secondNum}`)
    const king = document.createElement('div')
    const p = document.createElement("p")
    king.appendChild(p)
    p.innerHTML = Setting.PIECES[this._pieceNum]
    if (this._turn === false) {
      p.classList.add("turn") 
    } else {
      p.classList.add("inner_text")
    }
    king.id = idName
    king.classList.add("piece")
    home?.appendChild(king)
  }
} 