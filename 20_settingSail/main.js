const O = 'O';
const S = 'S';

// time complexity:  O(n), where n is number of points
// space complexity: O(n^2), have to have memo of points ships are in!
function canSetSail(harbor, limit) {
    const YSIZE = harbor.length;
    const XSIZE = harbor[0].length;
    // keep track which tiles have a ship (that we have already counted) in them
    const memo = Array.from(Array(YSIZE), () => new Array(XSIZE).fill(false));
    // keep track how many ships we have seen so far (will include the one that we will introduce!)
    let shipsSeen = 1;

    for (let j = 0; j < YSIZE; j++) {
        for (let i = 0; i < XSIZE; i++) {
            // not interested in Ocean, only Ships
            // not interested in ships we have seen already
            if (harbor[j][i] == O || memo[j][i] === true) {
                continue;
            }
            // this is a ship we haven't seen before!
            shipsSeen++;
            if ( !(shipsSeen < limit) ) {
                return false;
            }
            findShipSpan(i, j, harbor, memo);
        }
    }
    return true;
}

// create helper to check how big a ship spans, must update memo?
function findShipSpan(column, row, harbor, ships_seen_before) {
    const YSIZE = harbor.length;
    const XSIZE = harbor[0].length;
    const points_to_look_at = [[row, column]];

    // let isHorizontal = undefined; // need to keep track which way ship is facing? (do we?)
    // no don't think so, specs say harbor will not have ships that are touching
    while (points_to_look_at.length !== 0) {
        const point = points_to_look_at.shift();
        const y = point[0];
        const x = point[1];
        if (harbor[y][x] === S && ships_seen_before[y][x] === false) {
            ships_seen_before[y][x] = true;
            for (let j = y-1; j < y + 2; j ++) {
                if (j < 0 || j >= YSIZE) {
                    continue;
                }
                for (let i = x-1; i < x + 2; i ++) {
                    if (i < 0 || i >= XSIZE) {
                        continue;
                    }
                    // must not be diagonal, only looking at adjacent tiles to (x,y)
                    // AKA one of i or j must be equal to original center point's x or y
                    if (i !== x && j !== y) {
                        continue;
                    }
                    if (harbor[j][i] === S && ships_seen_before[y][x] === false) {
                        points_to_look_at.push([j, i]);
                    }
                }
            }
        }
    }

    return ships_seen_before; // could be void
}

check_expect = (i, j) => console.log(`Expected ${i}, got ${j}! ${i == j ? 'PASSED' : 'FAILED'}`)

example1 = [
    [O, O, S],
    [S, O, O],
    [O, O, S]
]

example2 = [
    [O, O, O],
    [S, O, S],
    [O, O, S]
]

check_expect(true, canSetSail(example1, 5));
check_expect(false, canSetSail(example2, 3));