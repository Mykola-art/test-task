## Task

Implement an algorithm to find the shortest path on a 2D map. The map is represented as a matrix (0 – passable cell, 1 – wall).

## Conditions:

### Input data:

`grid` – a two-dimensional array (0 – passable cell, 1 – wall).

`start` – coordinates [x, y] of the starting point.

`end` – coordinates [x, y] of the destination.

Movement is possible only in 4 directions (up, down, left, and right).

If a path is found, return a list of coordinates ([x, y]) and the
number of steps that lead from start to end. If not, return null.

`Do not use libraries.`

## Installation

```bash
npm install
```

## Running the Project

### Build the TypeScript code:

```bash
npm run build
```

### Run the compiled JavaScript:

```bash
node dist/index.js
```

- . represents passable cells (0)
- hash represents walls (1)
- Start position is at [0, 0]
- End position is at [4, 4]
