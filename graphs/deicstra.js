// const graph = {
//   start: { a: 6, b: 2 },
//   a: { fin: 1 },
//   b: { a: 3, fin: 5 },
//   fin: {},
// };
var graph = {
  start: { a: 5, b: 0 },
  a: { c: 15, d: 20, b: -100 },
  b: { c: 30, d: 35 },
  c: { fin: 20 },
  d: { fin: 10 },
  fin: {},
};
var graph2 = {
  start: { a: 5, b: 2 },
  a: { c: 4, d: 2 },
  b: { a: 8, d: 7 },
  c: { d: 6, fin: 3 },
  d: { fin: 1 },
  fin: {},
};
var graph1 = {
  start: { a: 10 },
  a: { b: 20 },
  b: { c: 1, fin: 30 },
  c: { a: 1 },
  fin: {},
};
var graph3 = {
  start: { a: 2, b: 2 },
  a: { c: 2, fin: 2 },
  b: { a: 2 },
  c: { b: -1, fin: 2 },
  fin: {},
};
function findMin(costs, isChecked) {
  let min = null;
  let index = null;
  for (let key in costs) {
    if ((costs[key] < min || min === null) && !(key in isChecked)) {
      min = costs[key];
      index = key;
    }
  }
  return index;
}
function dijkstra(graph, start, fin) {
  const costs = Object.assign({ fin: Infinity }, graph["start"]),
    isChecked = {},
    parents = { fin: null, start: null };
  for (let key in graph[start]) {
    parents[key] = start;
  }
  let node = findMin(costs, isChecked);
  while (node !== null) {
    let cost = costs[node],
      neighbors = graph[node];
    // console.log(neighbors);
    for (let key in neighbors) {
      let new_cost = cost + neighbors[key];
      if (costs[key] > new_cost || costs[key] === undefined) {
        costs[key] = new_cost;
        parents[key] = node;
      }
    }
    isChecked[node] = true;
    // console.log(costs);
    // console.log(parents);
    // console.log(isChecked);
    node = findMin(costs, isChecked);
  }
  if (costs[fin] !== Infinity) {
    let chain = [fin],
      startName = fin;
    while (startName !== start) {
      // console.log(startName);
      chain.push(parents[startName]);
      startName = parents[startName];
    }
    console.log(chain.reverse().join("->"));
  }
  console.log(parents);
  return costs[fin];
}
document.querySelector("button").addEventListener("click", () => {
  console.log(dijkstra(graph, "start", "fin"));
});
