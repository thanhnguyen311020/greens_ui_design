const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 3;

  if(activeIndex > 3){
    topPosition += shortcuts.clientHeight + 20;
}


  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});



var dropdonw_control = document.getElementsByClassName("droplistbtn");
var dropdownsx = document.getElementsByClassName("dropdown-table");
    console.log(dropdonw_control.length)
var j;
    for(j = 0 ; j < dropdonw_control.length; j++){
        dropdonw_control[j].addEventListener("click", function(){
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("show");
        })
    }


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.droplistbtn')) {
       
        var i;
        for (i = 0; i < dropdownsx.length; i++) {
            var openDropdown = dropdownsx[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
