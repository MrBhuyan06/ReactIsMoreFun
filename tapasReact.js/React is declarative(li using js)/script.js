const whyReact = ["Reuable", "V-Dom", "Simplity", "performance", "Component"];

function renderWhyReact() {
  let ul = document.getElementById("why-react");
  let heading = document.createElement("h1");
  heading.innerText = "Why React";
  ul.appendChild(heading);

  for (let i = 0; i < whyReact.length; i++) {
    let li = document.createElement("li");
    li.innerText = whyReact[i];
    ul.appendChild(li);
  }
}
renderWhyReact();
