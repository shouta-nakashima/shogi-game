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
  
} 