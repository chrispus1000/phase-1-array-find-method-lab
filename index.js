// code your solution here
const record = [
    {year: "2022", result: "L"},
    {year: "2021", result: "W"},
    {year: "2020", result: "N/A"}
  ] 

function superbowlWin(array) {
    let result = array.find(element => element.result === "W")
    return !!result ? result.year: undefined
}
