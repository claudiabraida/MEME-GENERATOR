
/* ✨✨✨✨✨ UNIVERSAL SELECTOR FUNCTION ✨✨✨✨✨ */
const $ = element => document.querySelector(element);

/* ============================ VARIABLES ============================ */

/*💠💠💠💠💠💠💠💠 VARIABLES HEADER BUTTONS NAV 💠💠💠💠💠💠💠 */
const $buttonImage = $(".button-image");
const $buttonText = $(".button-text");

/* 💠💠💠💠💠 VARIABLES BUTTONS CLOSE PANELS CONTROLS 💠💠💠💠💠 */
const $buttonCloseImagePanelControls = $(".close-image-panel-controls");
const $buttonCloseTextPanelControls = $ (".close-text-panel-controls");

/* 💠💠💠💠💠💠💠💠 VARIABLES PANELS CONTROLS 💠💠💠💠💠💠💠💠 */
const $asideImagePanelControls = $(".image-panel-controls");
const $asideTextPanelControls = $(".text-panel-controls");


/* -------------------------- IMAGE PANEL  -------------------------- */

/* 💠💠💠💠💠 VARIABLES MAIN: IMAGE-MEME / URL / SIZE 💠💠💠💠💠 */
const $divImageMeme = $(".image-meme");
const $inputUrlImageMeme = $("#url-image-meme");
const $inputRangeImageSize = $("#image-size");

/* 💠💠💠💠 VARIABLES INPUT COLOR BACKGROUND IMAGE (FONDO) 💠💠💠💠 */
const $inputColorPaletteImage = $("#color-palette-image");
const $labelNameColorPaletteImage = $(".name-color-palette-image");

/* 💠💠💠💠💠💠 VARIABLE SELECT BLEND MODE IMAGE (FONDO) 💠💠💠💠💠💠 */
const $selectBlendModeImage = $("#select-blend-mode-image")

/* 💠💠💠💠💠💠💠💠💠 VARIABLES FILTERS IMAGE 💠💠💠💠💠💠💠💠💠 */ 
const $inputRangeBrightness = $("#brightness");
const $inputRangeOpacity = $("#opacity");
const $inputRangeContrast = $("#contrast");
const $inputRangeBlur = $("#blur")
const $inputRangeGrayscale = $("#grayscale")
const $inputRangeSepia = $("#sepia")
const $inputRangeHue = $("#hue")
const $inputRangeSaturate = $("#saturate")
const $inputRangeInvert = $("#invert")
const $buttonResetFilterImage = $("#button-reset-filter-image");

/* -------------------------- TEXT PANEL  -------------------------- */

/* 💠💠💠💠💠💠💠💠💠 VARIABLES TOP TEXT 💠💠💠💠💠💠💠💠💠 */
const $pTopText = $(".top-text");
const $textareaTopText = $("#top-text");
const $inputCheckboxNoTopText = $("#no-top-text");

/* 💠💠💠💠💠💠 VARIABLES BOTTOM TEXT (PANEL TEXT) 💠💠💠💠💠💠 */
const $pBottomText = $(".bottom-text");
const $textareaBottomText = $("#bottom-text");
const $inputCheckboxNoBottomText = $("#no-bottom-text");

/* 💠💠💠💠💠💠💠💠💠 SELECT FONT-FAMILY 💠💠💠💠💠💠💠💠💠 */
const $selectFontFamily = $("#select-font");
/* =========================== FUNCTIONS =========================== */

/* 💡💡💡💡💡💡💡💡💡💡💡 FUNTION FILTER FUSION  💡💡💡💡💡💡💡💡💡💡💡 */
function fusionFilters () {$divImageMeme.style.filter = `
  brightness(${$inputRangeBrightness.value})
  opacity(${$inputRangeOpacity.value})
  contrast(${$inputRangeContrast.value}%)
  blur(${$inputRangeBlur.value}px) 
  grayscale(${$inputRangeGrayscale.value}%) 
  sepia(${$inputRangeSepia.value}%) 
  hue-rotate(${$inputRangeHue.value}deg)
  saturate(${$inputRangeSaturate.value}%) 
  invert(${$inputRangeInvert.value})`
}

/* 💡💡💡💡💡💡💡💡 FUNTION RESET VALUES FILTER IMAGE 💡💡💡💡💡💡💡💡 */
function resetValuesFilters () {
  $inputRangeImageSize.min = "0"
  $inputRangeImageSize.value = "100"
  $inputRangeImageSize.max = "300"
  $inputRangeImageSize.step = "1"
  
  /* FILTER BRIGHTNESS */
  $inputRangeBrightness.value = "1"
  $inputRangeBrightness.min = "0"
  $inputRangeBrightness.max = "1"
  $inputRangeBrightness.step = "0.1"
   
  /* FILTER OPACITY */
  $inputRangeOpacity.value = "1"
  $inputRangeOpacity.min = "0"
  $inputRangeOpacity.max = "1"
  $inputRangeOpacity.step = "0.1"
   
  /* FILTER CONTRAST */
  $inputRangeContrast.value = "100"
  $inputRangeContrast.min = "0"
  $inputRangeContrast.max = "400"
  $inputRangeContrast.step = "1"
  
  /* FILTER BLUR */
  $inputRangeBlur.value = "0"
  $inputRangeBlur.min = "0"
  $inputRangeBlur.max = "10"
  $inputRangeBlur.step = "0.1"
  
  /* FILTER GRAYSACLE */
  $inputRangeGrayscale.value = "0"
  $inputRangeGrayscale.min = "0"
  $inputRangeGrayscale.max = "100"
  $inputRangeGrayscale.step = "1"
  
  /* FILTER SEPIA */
  $inputRangeSepia.value = "0"
  $inputRangeSepia.min = "0"
  $inputRangeSepia.max = "100"
  $inputRangeSepia.step = "1"
  
  /* FILTER HUE */
  $inputRangeHue.value = "0"
  $inputRangeHue.min = "0"
  $inputRangeHue.max = "359"
  $inputRangeHue.step = "1"
  
  /* FILTER SATURATE */
  $inputRangeSaturate.value = "1"
  $inputRangeSaturate.min = "100"
  $inputRangeSaturate.max = "1000"
  $inputRangeSaturate.step = "10"
  
  /* FILTER INVERT */
  $inputRangeInvert.value = "0"
  $inputRangeInvert.min = "0"
  $inputRangeInvert.max = "1"
  $inputRangeInvert.step = "0.1"
  
  /* INITIAL VALUES */
  /* image size */
  $divImageMeme.style.backgroundSize = `${$inputRangeImageSize.value}%`
  /* filters*/
  $divImageMeme.style.filter = fusionFilters()
}
resetValuesFilters()

/* ============================== EVENTS ============================== */

/* 💥💥💥💥💥💥💥💥💥💥 EVENT BUTTONS NAV 💥💥💥💥💥💥💥💥💥💥 */
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


/* 💥💥💥💥💥💥 EVENT BUTTONS CLOSE PANELS CONTROLS 💥💥💥💥💥💥 */
$buttonCloseImagePanelControls.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "none"
})

$buttonCloseTextPanelControls.addEventListener("click", () => {
  $asideTextPanelControls.style.display = "none"
})

/* ----------------------- EVENT PANEL IMAGE ----------------------- */

/* 💥💥💥💥💥💥💥 EVENT URL IMAGE (PANEL IMAGE) 💥💥💥💥💥💥💥 */
$inputUrlImageMeme.addEventListener("input", () => {
  $divImageMeme.style.backgroundImage = `url(${$inputUrlImageMeme.value})`
})


/* 💥💥💥💥💥💥💥💥💥💥 EVENT IMAGE SIZE 💥💥💥💥💥💥💥💥💥💥 */ 
$inputRangeImageSize.addEventListener("input", () => {
  $divImageMeme.style.backgroundSize = `${$inputRangeImageSize.value}%`
})


/* 💥💥💥💥💥 EVENT INPUT COLOR-PALETTE/ LABEL NAME  💥💥💥💥💥 */ 
$inputColorPaletteImage.addEventListener("input", () => {
  $labelNameColorPaletteImage.innerText = $inputColorPaletteImage.value
  $divImageMeme.style.backgroundColor = $inputColorPaletteImage.value
})

/* 💥💥💥💥💥💥💥💥 EVENT SELECT BLEND MODE 💥💥💥💥💥💥💥💥 */ 
$selectBlendModeImage.addEventListener("input", () => {
  $divImageMeme.style.backgroundBlendMode = $selectBlendModeImage.value
})

/* 💥💥💥 EVENT INPUT RANGE FILTER IMAGE (FUSION FILTERS) 💥💥💥 */
$inputRangeBrightness.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeOpacity.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeContrast.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeBlur.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeGrayscale.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeSepia.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeHue.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeSaturate.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

$inputRangeInvert.addEventListener("input", () => {
  $divImageMeme.style.filter = fusionFilters()
});

/* 💥💥💥💥💥💥 EVENT BUTTON RESET FILTERS IMAGE 💥💥💥💥💥💥 */
$buttonResetFilterImage.addEventListener("click", resetValuesFilters);


/* ----------------------- EVENT PANEL TEXT ----------------------- */

/* 💥💥💥💥💥💥💥💥💥💥 WRITE TOP TEXT 💥💥💥💥💥💥💥💥💥💥 */
$textareaTopText.addEventListener("input", () => {
  $pTopText.innerText = $textareaTopText.value
})

/* 💥💥💥💥💥💥💥💥💥💥 NO TOP TEXT 💥💥💥💥💥💥💥💥💥💥 */
$inputCheckboxNoTopText.addEventListener("input", () => {
  $pTopText.innertHtml = $inputCheckboxNoTopText.value
  $pTopText.remove()
})

/* 💥💥💥💥💥💥💥💥💥 WRITE BOTTOM TEXT 💥💥💥💥💥💥💥💥💥 */
$textareaBottomText.addEventListener("input", () => {
  $pBottomText.innerText = $textareaBottomText.value

})

/* 💥💥💥💥💥💥💥💥💥 NO BOTTOM TEXT 💥💥💥💥💥💥💥💥💥💥 */
$inputCheckboxNoBottomText.addEventListener("input", () => {
  $pBottomText.remove()
})

/* 💥💥💥💥💥💥💥💥💥 SELECT FONT 💥💥💥💥💥💥💥💥💥💥 */
$selectFontFamily.addEventListener("input", () => {
  $pTopText.style.fontFamily = $selectFontFamily.value
})
$selectFontFamily.addEventListener("input", () => {
  $pBottomText.style.fontFamily = $selectFontFamily.value
})