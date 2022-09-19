const selected = document.querySelector("#rank-select");
const rankContainer = document.querySelector(".rank_container");
const fakeDocument = document.createDocumentFragment();

function paintNotice(rank) {
  rankContainer.innerText = "";
  for (let i = 0; i < rank.length; i++) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const title = document.createElement("a");
    const metaText = document.createElement("small");
    const hr = document.createElement("hr");
    img.src = `${rank[i].resulturl}`;
    img.style.width = "100px";
    title.href = `/installer/${rank[i]._id}`;
    title.innerText = `
    ${rank[i].title}
    `;
    metaText.innerText = `views : ${rank[i].meta.view}
    like : ${rank[i].meta.like}
    date : ${rank[i].createAt}`;
    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(metaText);
    li.appendChild(hr);
    fakeDocument.append(li);
  }
  rankContainer.append(fakeDocument);
}

async function handleSelected() {
  const value = selected.options[selected.selectedIndex].value;
  const response = await fetch(`/api/installer/rank/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  });
  if (response.status === 301) {
    const rankContainer = await response.json();
    paintNotice(rankContainer.rank);
  } else {
    return;
  }
}

function init() {
  selected.addEventListener("input", handleSelected);
}

init();
