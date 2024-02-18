// $(document).ready(function() {
//     $(".js-menu-icon").on("click", function() {
//       $(this).toggleClass("fa-times fa-bars");
//       $(".menu .container").removeClass("container--is-visible");
//       $(".menu li").removeClass("is-selected");
//       $(".js-navbar").toggleClass("navbar--is-visible");
//     });
  
//     $(".menu li").on("click", function(e) {
//       e.preventDefault();
//       var $this = $(this);
//       $this.toggleClass("is-selected");
  
//       var $currentContainer = $(this).find(".container");
//       $currentContainer.toggleClass("container--is-visible");
  
//       $(".menu .container")
//         .not($currentContainer)
//         .removeClass("container--is-visible");
//       $(".menu li").not($this).removeClass("is-selected");
//     });
//   });
  const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

filterObjects("all");
function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("container__listItem");
  if (c == "all") {
    c = ""; // If "all" is selected, show all elements
  }
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show"); // Remove the "show" class from all elements initially
    if (x[i].className.indexOf(c) > -1) {
      // Check if the element's class contains the filter class
      addClass(x[i], "show"); // Add the "show" class to elements that match the filter
    }
  }
}

function addClass(element,name) {
  var i, arr1 , arr2;
  arr1 = element.className.split(" ");
  arr2= name.split(" ");
  for(i=0; i<arr2.length; i++){
    if(arr1.indexOf(arr2[i])== -1){
          element.className += " " + arr2[i]
    }
  }
}

function removeClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2= name.split(" ");
  for(i=0; i< arr2.length; i++){
    while(arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}