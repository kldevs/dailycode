// https://www.codewars.com/kata/58539230879867a8cd00011c

function findChildren(dancingBrigade) {
  return dancingBrigade.split("")
    .sort((a, b) => a.localeCompare(b, "en", { caseFirst: "upper" }))
    .join("");
}
