type Coordinate = [number, number];

function isValidMove(
  x: number,
  y: number,
  grid: number[][],
  visited: boolean[][]
): boolean {
  return (
    x >= 0 &&
    x < grid.length &&
    y >= 0 &&
    y < grid[0].length &&
    grid[x][y] === 0 &&
    !visited[x][y]
  );
}

function bfs(
  grid: number[][],
  start: Coordinate,
  end: Coordinate
): { path: Coordinate[]; steps: number } | null {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions: Coordinate[] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue: { x: number; y: number; path: Coordinate[]; steps: number }[] =
    [];

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  queue.push({ x: start[0], y: start[1], path: [start], steps: 0 });
  visited[start[0]][start[1]] = true;

  console.log("\n====== Initial Grid ======\n");
  printGrid(grid);
  console.log("\n\n======> Starting BFS...\n");

  while (queue.length > 0) {
    const current = queue.shift()!;
    const { x, y, path, steps } = current;

    console.log(`Current Position: [${x}, ${y}], Steps: ${steps}, Path:`, path);

    if (x === end[0] && y === end[1]) {
      console.log("End reached!");
      return { path, steps };
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidMove(newX, newY, grid, visited)) {
        visited[newX][newY] = true;
        queue.push({
          x: newX,
          y: newY,
          path: [...path, [newX, newY]],
          steps: steps + 1,
        });
      }
    }
  }

  console.log("No path found.");
  return null;
}

function printGrid(grid: number[][]): void {
  grid.forEach((row) => {
    console.log(row.map((cell) => (cell === 1 ? "#" : ".")).join(" "));
  });
}

const grid = [
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const start: Coordinate = [0, 0];
const end: Coordinate = [4, 4];

const result = bfs(grid, start, end);

if (result) {
  console.log("\n\n====== Path found ======\n", result.path);
  console.log(`\n======> Total steps: ${result.steps}\n`);
} else {
  console.log("\n\n====== No path found ======");
}
