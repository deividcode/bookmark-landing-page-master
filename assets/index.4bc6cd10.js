(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const img1 = "" + new URL("illustration-features-tab-1.97ae1cb6.svg", import.meta.url).href;
const img2 = "" + new URL("illustration-features-tab-2.e009949f.svg", import.meta.url).href;
const img3 = "" + new URL("illustration-features-tab-3.cf951131.svg", import.meta.url).href;
let openMenu = document.querySelector(".header__icon-menu");
let closeMenu = document.querySelector(".header__close-menu");
let screenMenu = document.querySelector(".screen-menu");
let featureTypesContents = document.querySelector(".feature__types-contents");
let featureTypesHeader = document.querySelector(".feature__types-header");
let featureNavs = document.querySelectorAll(".feature__types-header .feature__nav");
window.addEventListener("load", () => {
  openMenu.addEventListener("click", () => {
    screenMenu.style.display = "flex";
    screenMenu.style.opacity = "1";
  });
  closeMenu.addEventListener("click", () => {
    screenMenu.style.opacity = "0";
    screenMenu.style.display = "none";
  });
  featureTypesHeader.addEventListener("click", (e) => {
    let featureTypes = e.target.parentElement;
    if (featureTypes.classList.contains("feature__nav") || featureTypes.nodeName == "SPAN") {
      featureNavs.forEach((element) => {
        if (element.classList.contains("feature__types-active")) {
          element.classList.remove("feature__types-active");
        }
      });
      featureTypes.classList.add("feature__types-active");
      featureNavs.forEach((element, i) => {
        if (element.classList.contains("feature__types-active")) {
          showFeatures(i);
        }
      });
    }
  });
});
function showFeatures(i) {
  while (featureTypesContents.firstChild) {
    featureTypesContents.removeChild(featureTypesContents.firstChild);
  }
  switch (i) {
    case 0:
      featureTypesContents.insertAdjacentHTML("afterbegin", `

                <section class="feature__simple">

                    <section class="feature__simple-image">
                        <img src="${img1}" alt="">
                    </section>

                    <section class="feature__simple-text">
                        <h3>Bookmark in one click</h3>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.</p>
                        <a href="#" class="btn-primary btn-hidden">More Info</a>
                    </section>

                 </section>         
            
            `);
      break;
    case 1:
      featureTypesContents.insertAdjacentHTML("afterbegin", `

                <section class="feature__simple">

                    <section class="feature__simple-image">
                        <img src="${img2}" alt="">
                    </section>

                    <section class="feature__simple-text">
                        <h3>Intelligent search</h3>
                        <p>Our powerful search feature will help you find saved sites in no time at all. 
                        No need to trawl through all of your bookmarks.</p>
                        <a href="#" class="btn-primary btn-hidden">More Info</a>
                    </section>

                </section>         
            
            `);
      break;
    case 2:
      featureTypesContents.insertAdjacentHTML("afterbegin", `

                <section class="feature__simple">

                    <section class="feature__simple-image">
                        <img src="${img3}" alt="">
                    </section>

                    <section class="feature__simple-text">
                        <h3>Share your bookmarks</h3>
                        <p>Easily share your bookmarks and collections with others. Create a shareable 
                        link that you can send at the click of a button.</p>
                        <a href="#" class="btn-primary btn-hidden">More Info</a>
                    </section>

                 </section>         
            
            `);
      break;
  }
}
