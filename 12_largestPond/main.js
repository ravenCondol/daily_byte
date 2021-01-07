// time complexity: O(mn*   ) m is # rows, n is # columns

function largestPond(map) {
    const YSIZE = map.length;
    const XSIZE = map[0].length;
    let max_pond_size = 0;
    for (row = 0; row < YSIZE; row++) {
        for (column = 0; column < XSIZE; column++) {
            let visited_points = {};
            let points_to_look = [[row, column]]; // (y, x), top left is 0,0
            console.log(`Row: ${row}, Col: ${column}`);
            let pond_size = 0;
            while (points_to_look.length !== 0) {
                const point = points_to_look.shift();
                const y = point[0];
                const x = point[1];
                console.log(`Looking at y: ${y}, x: ${x}. Visited? ${visited_points["" + y + "," + x] !== undefined}. Water? ${map[y][x] === 0}`);
                if (map[y][x] === 0 && visited_points["" + y + "," + x] === undefined) { // is water
                    visited_points["" + y + "," + x] = true;
                    pond_size++;
                    for (let j = y-1; j < y + 2; j ++) {
                        if (j < 0 || j >= YSIZE) {
                            continue;
                        }
                        for (let i = x-1; i < x + 2; i ++) {
                            if (i < 0 || i >= XSIZE) {
                                continue;
                            }
                            if (i !== x && j !== y) {
                                continue;
                            }
                            // add to points_to_look, update visited_points?
                            if (map[j][i] === 0 && visited_points["" + j + "," + i] === undefined) {
                                points_to_look.push([j, i]);
                                console.log(`Adding y:${j},x:${i} to points queue!`);
                            }
                        }
                    }
                    // update max_pond_size
                    max_pond_size = Math.max(max_pond_size, pond_size);
                // if land, clear visited points? what if unvisited?
                } else if (visited_points["" + y + "," + x] !== undefined) {
                    continue;
                } else {
                    // is land, not water!
                    // visited_points["" + y + "," + x] = true;
                    continue;
                }
            }
        }
    }
    return max_pond_size;
}

land = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

land2 = [
    [1,0,1],
    [0,0,0],
    [1,0,1]
]
console.log(largestPond(land));
console.log("\n\n\n\n===============================================\n\n\n\n");
console.log(largestPond(land2));