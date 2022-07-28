let graph = {
  you: ["alice", "bob", "clara"],
  bob: ["anuj", "peggi", "you"],
  alice: ["peggi", "you"],
  clara: ["you", "thom", "jonny"],
  anuj: [],
  peggi: [],
  thom: [],
  jonny: [],
};
let name = "you",
  watchedPerson = {},
  searching = [...graph[name]],
  minLength = 0;
do {
  let person = searching.shift();
  // console.log(person[person.length - 1]);
  if (person[person.length - 1] === "m") {
    console.log(`level frending ${minLength + 1}`);
    console.log(`Mango seller is ${person}`);
    debugger;
  } else {
    watchedPerson[person] = true;
    graph[person].forEach((e) => {
      if (!(e in watchedPerson)) {
        searching.push(e);
      }
    });
    // console.log(searching);
  }
} while (searching.length);
