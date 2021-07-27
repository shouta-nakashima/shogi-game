import { Piece } from './piece';
import { Setting } from '../setting';

export class King extends Piece {
  _firstNum: number
  _secondNum: number
  _idName:string
  
  constructor(_turn: boolean, _firstNum:number,_secondNum:number,_idName:string,_pieceNum: number = 7,) {
    super(_turn, _pieceNum, Setting.PIECES[_pieceNum])
    this._firstNum = _firstNum
    this._secondNum = _secondNum
    this._idName = _idName
    this.create(this._firstNum,this._secondNum,this._idName) 
  }
  
}