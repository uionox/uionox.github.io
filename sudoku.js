/* Sudoku puzzle generator: randomized backtracking fill + hole-digging
   that keeps removing a cell only while the puzzle still has a unique solution. */

export const DIFFICULTIES = { easy: 40, medium: 32, hard: 26 };

function emptyGrid() { return Array.from({ length: 9 }, () => Array(9).fill(0)); }

function isValid(grid, r, c, v) {
  for (let i = 0; i < 9; i++) if (grid[r][i] === v || grid[i][c] === v) return false;
  const br = r - r % 3, bc = c - c % 3;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (grid[br + i][bc + j] === v) return false;
  return true;
}

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function fillGrid(grid) {
  for (let i = 0; i < 81; i++) {
    const r = Math.floor(i / 9), c = i % 9;
    if (grid[r][c] !== 0) continue;
    for (const v of shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
      if (isValid(grid, r, c, v)) {
        grid[r][c] = v;
        if (fillGrid(grid)) return true;
        grid[r][c] = 0;
      }
    }
    return false;
  }
  return true;
}

function countSolutions(grid, limit) {
  let count = 0;
  function solve() {
    if (count >= limit) return;
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(i / 9), c = i % 9;
      if (grid[r][c] !== 0) continue;
      for (let v = 1; v <= 9; v++) {
        if (isValid(grid, r, c, v)) {
          grid[r][c] = v;
          solve();
          grid[r][c] = 0;
          if (count >= limit) return;
        }
      }
      return;
    }
    count++;
  }
  solve();
  return count;
}

export function generate(difficulty) {
  const solution = emptyGrid();
  fillGrid(solution);
  const puzzle = solution.map(row => row.slice());
  const targetGivens = DIFFICULTIES[difficulty] || DIFFICULTIES.medium;
  const cells = shuffled(Array.from({ length: 81 }, (_, i) => i));
  let givens = 81;
  for (const idx of cells) {
    if (givens <= targetGivens) break;
    const r = Math.floor(idx / 9), c = idx % 9;
    if (puzzle[r][c] === 0) continue;
    const backup = puzzle[r][c];
    puzzle[r][c] = 0;
    const clone = puzzle.map(row => row.slice());
    if (countSolutions(clone, 2) === 1) givens--;
    else puzzle[r][c] = backup;
  }
  return { puzzle, solution };
}
