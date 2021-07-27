import { Piece } from './pieces/piece';
import { Knight } from './pieces/knight';
import { Setting, } from './setting';
import { Mt } from './pieces/mt'
import { Infantry } from './pieces/infantry';
import { Lance } from './pieces/lance';
import { Silver } from './pieces/silver';
import { Gold } from './pieces/gold';
import { Bishop } from './pieces/bishop';
import { Rook } from './pieces/rook';
import { King } from './pieces/king';

export const makeBoard = () => {
  let squares :Piece[][] = [];
  for (let i = 0; i < Setting.LENGTH; ++i) {
    squares[i] = [];
    for (let j = 0; j < Setting.LENGTH; ++j) {
      squares[i].push(new Mt());
    }
  }
  //歩
  for(let i = 0; i < Setting.LENGTH; ++i){
    squares[i][2] = new Infantry(false,i,2,"infantry");
    squares[i][6] = new Infantry(true,i,6,"infantry");
  }
  //香車
  squares[0][0] = new Lance(false,0,0,"lance");
  squares[8][0] = new Lance(false,8,0,"lance");
  squares[0][8] = new Lance(true,0,8,"lance");
  squares[8][8] = new Lance(true,8,8,"lance");
  //桂馬
  squares[1][0] = new Knight(false,1,0,"knight");
  squares[7][0] = new Knight(false,7,0,"knight");
  squares[1][8] = new Knight(true,1,8,"knight");
  squares[7][8] = new Knight(true, 7, 8,"knight");
  //銀
  squares[2][0] = new Silver(false,2,0,"silver");
  squares[6][0] = new Silver(false,6,0,"silver");
  squares[2][8] = new Silver(true,2,8,"silver");
  squares[6][8] = new Silver(true, 6, 8,"silver");
  //金
  squares[3][0] = new Gold(false,3,0,"gold");
  squares[5][0] = new Gold(false,5,0,"gold");
  squares[3][8] = new Gold(true,3,8,"gold");
  squares[5][8] = new Gold(true, 5, 8,"gold");
  //角
  squares[1][1] = new Bishop(false,1,1,"bishop");
  squares[7][7] = new Bishop(true,7,7,"bishop");
  //飛車
  squares[7][1] = new Rook(false,7,1,"rook");
  squares[1][7] = new Rook(true, 1, 7,"rook");
  //王
  squares[4][0] = new King(false,4,0,"king");
  squares[4][8] = new King(true,4,8,"king");
  
  return squares
}
