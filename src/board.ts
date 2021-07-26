const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
export const createBoard = () => {
  const root = document.getElementById("root")
for (let i = 0; i < 9; i++) {
  board[i] = new Array()
  
  const boards = document.createElement("div")
  boards.id = "board"
  boards.classList.add("board")
  
  for (let j = 0; j < 9; j++) {
    board[i][j] = i * 9 + (j + 1)
    const mathu = document.createElement("div")
    mathu.id = "mathu"
    mathu.classList.add("mathu")
    boards.appendChild(mathu)

  }
  root!.appendChild(boards)
}

}