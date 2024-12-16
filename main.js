/* ************ UNIVERSAL SELECTOR FUNCTION ************ */
const $ = element => document.querySelector(element);

/* ************ VARIABLES ************ */
/* BUTTONS NAV */
const $buttonImage = $(".buttonImage");
const $buttonText = $(".buttonText");

/* PANELS CONTROLS */
const $asideImagePanelControls = $(".imagePanelControls");
const $asideTextPanelControls = $(".textPanelControls");

/* BUTTONS CLOSE PANELS */
const $buttonCloseImagePanelControls = $(".closeImagePanelControls");
const $buttonCloseTextPanelControls = $ (".closeTextPanelControls");

/* *********** EVENTS *********** */

/* -------- BUTTONS NAV -------- */
$buttonText.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "flex"
  if( $asideImagePanelControls.style.display = "flex") {
  $asideImagePanelControls.style.display = "none"
  $asideTextPanelControls.style.display = "flex"
  }
  
})

$buttonImage.addEventListener("click", () => {
  $asideTextPanelControls.style.display = "flex"
  if ($asideTextPanelControls.style.display = "flex") {
    $asideTextPanelControls.style.display = "none"
    $asideImagePanelControls.style.display = "flex"
  }
  
})

/*BUTTONS CLOSE PANELS*/
$buttonCloseImagePanelControls.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "none"
})

$buttonCloseTextPanelControls.addEventListener("click", () => {
  $asideTextPanelControls.style.display = "none"
})

