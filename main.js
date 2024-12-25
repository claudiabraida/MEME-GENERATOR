/* ✨✨✨✨✨ UNIVERSAL SELECTOR FUNCTION ✨✨✨✨✨ */
const $ = element => document.querySelector(element);

/* ✨✨✨✨✨✨✨ VARIABLES ✨✨✨✨✨✨✨ */

/* ________________ HEADER BUTTONS NAV ________________ */
const $buttonImage = $(".button-image");
const $buttonText = $(".button-text");

/* _________________ MAIN IMAGE-MEME / URL _________________ */
const $divImageMeme = $(".image-meme")
const $inputUrlImageMeme = $("#url-image-meme");

/* __________________ PANELS CONTROLS __________________ */
const $asideImagePanelControls = $(".image-panel-controls");
const $asideTextPanelControls = $(".text-panel-controls");

/* ___________ BUTTONS CLOSE PANELS CONTROLS ___________ */
const $buttonCloseImagePanelControls = $(".close-image-panel-controls");
const $buttonCloseTextPanelControls = $ (".close-text-panel-controls");


/* ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ */ 


/* ✨✨✨✨✨✨✨✨ EVENTS ✨✨✨✨✨✨✨✨ */ 

/* ................ EVENT BUTTONS NAV ................ */
$buttonText.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "flex"
  if ( $asideImagePanelControls.style.display = "flex") {
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


/* ........... EVENT BUTTONS CLOSE PANELS ........... */
$buttonCloseImagePanelControls.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "none"
})

$buttonCloseTextPanelControls.addEventListener("click", () => {
  $asideTextPanelControls.style.display = "none"
})

/* ................... EVENT IMAGE PANEL .................... */

/* ----------------------- EVENT IMAGE URL ----------------------- */
$inputUrlImageMeme.addEventListener("input", () => {
  $divImageMeme.style.backgroundImage = `url(${$inputUrlImageMeme.value})`
})

/* .................... EVENT TEXT PANEL .................... */

/* ------------------- VARIABLES TOP TEXT ------------------- */
const $sectionContainerMeme = $("container-meme");
const $pTopText = $(".top-text");
const $textareaTopText = $("#top-text");
const $inputCheckboxNoTopText = $("#no-top-text");

/* -------------------- WRITE TOP TEXT -------------------- */
$textareaTopText.addEventListener("input", () => {
  $pTopText.innerText = $textareaTopText.value
})

/* --------------------- NO TOP TEXT --------------------- */
$inputCheckboxNoTopText.addEventListener("input", () => {
  $pTopText.innertHtml = $inputCheckboxNoTopText.value
  $pTopText.remove()
})

/* ---------------- VARIABLES BOTTOM TEXT ---------------- */
const $pBottomText = $(".bottom-text");
const $textareaBottomText = $("#bottom-text");
const $inputCheckboxNoBottomText = $("#no-bottom-text");

/* ----------------- WRITE BOTTOM TEXT ----------------- */
$textareaBottomText.addEventListener("input", () => {
  $pBottomText.innerText = $textareaBottomText.value

})

/* ------------------ NO BOTTOM TEXT ------------------ */
$inputCheckboxNoBottomText.addEventListener("input", () => {
  $pBottomText.remove()
})  
   

/* ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ */ 

