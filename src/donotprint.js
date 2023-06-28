window.onload = function() {
  document.body.innerHTML += "<div id='donotprint-overlay'><div id='donotprint-popup'><div id='donotprint-message' style='font-size: 21px; margin-bottom: 12px; margin-left: auto;'>Please do not print</div><div style='display: flex; flex-direction: row-reverse;'><div id='donotprint-cancel' style='margin-left: 12px;'>I will save the environment</div><div id='donotprint-anyway'>I don't care, print anyway</div></div></div>";
  var overlay = document.getElementById('donotprint-overlay');
  var popup = document.getElementById('donotprint-popup');
  var anyway = document.getElementById('donotprint-anyway');
  var cancel = document.getElementById('donotprint-cancel');
  var allowPrint = false;
  var showPopup = function() {
    document.getElementById('donotprint-overlay').style.display = "inline";
    document.getElementById('donotprint-overlay').style.opacity = "1";
  }
  var printAnyway = function() {
    allowPrint = true;
    hidePopup();
    window.print();
  }
  var cancelPrint = function() {
    allowPrint = false;
    hidePopup();
  }
  var hidePopup = function() {
    document.getElementById('donotprint-overlay').style.display = "hide";
    document.getElementById('donotprint-overlay').style.opacity = "0";
  }
  var overlayStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.7)",
    transition: "opacity 500ms",
    display: "none",
    opacity: 0
  };
  var popupStyle = {
    margin: "70px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "5px",
    width: "30%",
    position: "relative",
    transition: "all 5s ease-in-out"
  };
  var anywayStyle = {
    border: "1px solid #000",
    padding: "12px",
    borderRadius: "5px",
  };
  var cancelStyle = {
    border: "1px solid #000",
    padding: "12px",
    borderRadius: "5px",
  };
  Object.assign(overlay.style, overlayStyle);
  Object.assign(popup.style, popupStyle);
  Object.assign(anyway.style, anywayStyle);
  Object.assign(cancel.style, cancelStyle);
  window.onbeforeprint = (event) => {
    if(!allowPrint) showPopup();
  };
  
  document.getElementById("donotprint-anyway").addEventListener("click", printAnyway);
  document.getElementById("donotprint-cancel").addEventListener("click", cancelPrint);
  
  document.onkeydown = function (event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'p' && event.shiftKey) {
      printAnyway();
    }
  }
  // window.print();
  // showPopup();
}
