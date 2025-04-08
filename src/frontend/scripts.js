// TODO
// 1. Make scroll not reset when adding new content - probably have to save it
// 2. Need to detect lists
// 3. replace \n with \newline but keep \n\n
// 4. Detect lists and add \begin{enumerate}
// 5. Ability to remove elements
// 6. Add conclusions/customise place/trial/visit conclusions
//
// 7. Add customisable inputs

async function loadHTML(path) {
  // Load HTML from the specified path into the main #container div
  // The scroll is reset when doing this, so we have to save the scroll in tmp and set it back once the element is added.
  tmp = window.scrollY;
  document.getElementById("container").insertAdjacentHTML("beforeend", (await (await fetch(path)).text()).toString());
  window.scroll(0, tmp);
}
