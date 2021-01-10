function closestKPoints(points, k) {
    const k_closest_points = [];
    points.sort((p1, p2) => distanceFromOrigin(p1) < distanceFromOrigin(p2) ? -1 : 1);
    for (let i = 0; i < k; i++) {
        k_closest_points.push(points[i]);
    }
    return k_closest_points;
}

// time complexity = O(nlogn)
// space complexity = O(k)

function distanceFromOrigin(point) {
    let x = point[0];
    let y = point[1];
    return Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
}
example1 = [[1,1],[-2,-2]];
console.log(JSON.stringify(closestKPoints(example1, 1)));