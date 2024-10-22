var screenWidth = window.innerWidth;

function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";

    if(screenWidth > 767){
      tooltip.style.left = '850px';
      tooltip.style.top = '200px';
    }
    else if(screenWidth > 499.9 && screenWidth < 760){
      tooltip.style.left = '240px';
      tooltip.style.top = '220px';
    }
    else if(screenWidth < 440 && screenWidth > 385){
      tooltip.style.left = '240px';
      tooltip.style.top = '520px';
      tooltip.style.width = '120px';
    }
    else{
      tooltip.style.left = '550px';
      tooltip.style.top = '240px';
    }    
}
  
function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}