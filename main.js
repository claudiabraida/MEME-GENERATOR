
/* ✨✨✨✨✨ UNIVERSAL SELECTOR FUNCTION ✨✨✨✨✨ */
const $ = element => document.querySelector(element);

/* ============================ VARIABLES ============================ */

const $bodyDarkMode = $(".body-dark-mode");
const $header = $("header");
/*💠💠💠💠💠💠💠💠 VARIABLES HEADER BUTTONS NAV 💠💠💠💠💠💠💠 */
const $buttonImage = $(".button-image");
const $buttonText = $(".button-text");
const $buttonMode = $(".button-mode");

/*💠💠💠💠💠💠💠💠 VARIABLES CONTAINER MEME 💠💠💠💠💠💠💠 */
const $main = $("main");
const $containerMeme = $(".container-meme");
const $pTopText = $(".top-text");
const $divImageMeme = $(".image-meme");
const $pBottomText = $(".bottom-text");

/* 💠💠💠💠💠 VARIABLES BUTTONS CLOSE PANELS CONTROLS 💠💠💠💠💠 */
const $buttonCloseImagePanelControls = $(".close-image-panel-controls");
const $buttonCloseTextPanelControls = $ (".close-text-panel-controls");

/* 💠💠💠💠💠💠💠💠 VARIABLES PANELS CONTROLS 💠💠💠💠💠💠💠💠 */
const $asideImagePanelControls = $(".image-panel-controls");
const $asideTextPanelControls = $(".text-panel-controls");


/* -------------------------- IMAGE PANEL  -------------------------- */

/* 💠💠💠💠💠💠 VARIABLES IMAGE INPUT URL/ NPUT SIZE 💠💠💠💠💠💠 */
const $inputUrlImageMeme = $("#url-image-meme");
const $inputRangeImageSize = $("#image-size");

/* 💠💠💠💠 VARIABLES INPUT IMAGE BACKGROUND COLOR (FONDO) 💠💠💠💠 */
const $inputBackgroundColorImage = $("#background-color-image");
const $labelNameBackgroundColorImage = $(".name-background-color-image");

/* 💠💠💠💠💠 VARIABLE SELECT BLEND MODE IMAGE (FONDO) 💠💠💠💠💠 */
const $selectBlendModeImage = $("#select-blend-mode-image")

/* 💠💠💠💠💠💠💠💠💠 VARIABLES FILTERS IMAGE 💠💠💠💠💠💠💠💠 */ 
const $inputRangeBrightness = $("#brightness");
const $inputRangeOpacity = $("#opacity");
const $inputRangeContrast = $("#contrast");
const $inputRangeBlur = $("#blur")
const $inputRangeGrayscale = $("#grayscale")
const $inputRangeSepia = $("#sepia")
const $inputRangeHue = $("#hue")
const $inputRangeSaturate = $("#saturate")
const $inputRangeInvert = $("#invert")

/* 💠💠💠💠💠💠 VARIABLE BUTTON RESET FILTERS IMAGE 💠💠💠💠💠💠 */ 
const $buttonResetFilterImage = $("#button-reset-filter-image");

/* -------------------------- TEXT PANEL  -------------------------- */

/* 💠💠💠💠💠💠💠 VARIABLES TEXTAREA TOP TEXT (PANEL TEXT)💠💠💠💠💠💠💠 */
const $textareaTopText = $("#top-text");
const $inputCheckboxNoTopText = $("#no-top-text");

/* 💠💠💠💠💠💠 VARIABLES TEXTAREA BOTTOM TEXT (PANEL TEXT) 💠💠💠💠💠💠 */
const $textareaBottomText = $("#bottom-text");
const $inputCheckboxNoBottomText = $("#no-bottom-text");

/* 💠💠💠💠💠💠💠💠💠 SELECT FONT-FAMILY /FONT SIZE💠💠💠💠💠💠💠💠💠 */
const $selectFontFamily = $("#select-font");
const $inputFontSizeText = $("#font-size-text");

/* 💠💠💠💠💠💠💠 VARIABLE ALIGN-TEXT (alineacion) 💠💠💠💠💠💠💠 */
const $inputButtonAlignLeft = $("#align-text-left");//izquierda 
const $inputButtonAlignCenter = $("#align-text-center");//centrado       
const $inputButtonAlignRight = $("#align-text-right");//derecha

/* 💠💠💠💠💠💠💠 VARIABLE INPUT TEXT COLOR 💠💠💠💠💠💠💠 */
const $inputColorText = $("#color-text");
const $labelNameColorText = $(".name-color-text");

/* 💠💠💠💠💠💠 VARIABLE INPUT BACKGROUND TEXT 💠💠💠💠💠💠 */
const $inputBackgroundText = $("#background-text");
const $labelNameBackgroundText = $(".name-background-text");

/* 💠💠💠💠💠💠 TEXT TRANSPARENT (CHECKBOX) 💠💠💠💠💠💠 */
// ????????????????????????????????????????????????????????????
// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗REVISAR LINEA 380❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

/* 💠💠💠 VARIABLE TEXT FONT OUTLINE (contorno de texto) 💠💠💠 */
// ????????????????????????????????????????????????????????????

/* 💠💠💠💠💠💠 VARIABLE TEXT LINE HEIGH 💠💠💠💠💠💠💠 */
const $inputTextLineHeight = $("#text-line-height");// interlineado

/* 💠💠💠💠💠 VARIABLE TEXT LETTER SPACING 💠💠💠💠💠 */
const $selectLetterSpacingText = $("#select-letter-spacing-text");//espaciado


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

/* 💥💥💥💥💥 EVENT BUTTONS NAV (alternancia de paneles)💥💥💥💥💥 */
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

/* 💥💥💥💥💥💥 EVENT BUTTON LIGHT MODE DARK MODE 💥💥💥💥💥💥 */
$buttonMode.addEventListener("click", () => {
  $buttonMode.innerText = "Modo Claro"
  $header.style.backgroundColor = "#b4b9c3"
  $main.style.backgroundColor = "#d1cdd7"
  $asideImagePanelControls.style.backgroundColor = "#b4b9c3"
  $asideTextPanelControls.style.backgroundColor = "#b4b9c3"
  $buttonImage.style.color = "black"
  $buttonText.style.color = "black"
  $buttonMode.style.color = "black"
  
  if($bodyDarkMode.classList.contains("body-dark-mode")) {
    $bodyDarkMode.classList.remove("body-dark-mode")
    $bodyDarkMode.classList.add("body-light-mode")

  } else {
    $bodyDarkMode.classList.remove("body-light-mode")
    $bodyDarkMode.classList.add("body-dark-mode")
    $buttonMode.innerText = "Modo Oscuro"
    $header.style.backgroundColor = "#1e0839"
    $main.style.backgroundColor = "#0c1a58"
    $asideImagePanelControls.style.backgroundColor = "black"
    $asideTextPanelControls.style.backgroundColor = "black"
    $buttonImage.style.color = "whitesmoke"
    $buttonText.style.color = "whitesmoke"
    $buttonMode.style.color = "whitesmoke"
    
  }

})

/* 💥💥💥💥💥💥 EVENT BUTTON CLOSE IMAGE /TEXT PANEL 💥💥💥💥💥💥 */
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


/* 💥💥💥💥💥 EVENT INPUT IMAGE BACKGROUND COLOR (FONDO)  💥💥💥💥💥 */ 
$inputBackgroundColorImage.addEventListener("input", () => {
  $labelNameBackgroundColorImage.innerText = $inputBackgroundColorImage.value
  $divImageMeme.style.backgroundColor = $inputBackgroundColorImage.value
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

/* 💥💥💥💥💥💥💥💥 TEXTAREA TOP TEXT (WRITE) 💥💥💥💥💥💥💥💥 */
$textareaTopText.addEventListener("input", () => {
  $pTopText.innerText = $textareaTopText.value
})

/* 💥💥💥💥💥💥💥💥 NO TOP TEXT (checkbox) 💥💥💥💥💥💥💥💥 */
$inputCheckboxNoTopText.addEventListener("change", () => {
  $pTopText.style.display = "none"
  if ($inputCheckboxNoTopText.checked) {
    $pTopText.style.display = "block"
  }
})

/* 💥💥💥💥💥💥💥 TEXTAREA BOTTOM TEXT (WRITE)💥💥💥💥💥💥💥 */
$textareaBottomText.addEventListener("input", () => {
  $pBottomText.innerText = $textareaBottomText.value

})

/* 💥💥💥💥💥💥💥 NO BOTTOM TEXT (checkbox) 💥💥💥💥💥💥💥💥 */
$inputCheckboxNoBottomText.addEventListener("change", () => {
  $pBottomText.style.display = "none"
  if ($inputCheckboxNoBottomText.checked) {
    $pBottomText.style.display = "block"
  }
})


/* 💥💥💥💥💥💥💥 EVENT SELECT FONT FAMILY 💥💥💥💥💥💥💥 */
$selectFontFamily.addEventListener("input", () => {
  $pTopText.style.fontFamily = $selectFontFamily.value
})

$selectFontFamily.addEventListener("input", () => {
  $pBottomText.style.fontFamily = $selectFontFamily.value
})

/* 💥💥💥💥💥💥 EVENT INPUT FONT SIZE TEXT 💥💥💥💥💥💥💥 */
$inputFontSizeText.addEventListener("input", () => {
  $pTopText.style.fontSize = `${$inputFontSizeText.value}px`
  $pBottomText.style.fontSize = `${$inputFontSizeText.value}px`
})

/* 💥💥💥💥💥💥💥 EVENT ALIGN-TEXT  💥💥💥💥💥💥💥💥 */
$inputButtonAlignLeft.addEventListener("click", () => {
  $pTopText.style.textAlign = "left"
  $pBottomText.style.textAlign = "left"
})

$inputButtonAlignCenter.addEventListener("click", () => {
  $pTopText.style.textAlign = "center"
  $pBottomText.style.textAlign = "center"
})

$inputButtonAlignRight.addEventListener("click", () => {
  $pTopText.style.textAlign = "right"
  $pBottomText.style.textAlign = "right"
})
/* 💥💥💥💥💥💥💥 EVENT INPUT TEXT COLOR  💥💥💥💥💥💥💥💥 */
$inputColorText.addEventListener("input", () => {
  $labelNameColorText.innerText = $inputColorText.value
  $pTopText.style.color = $inputColorText.value
  $pBottomText.style.color = $inputColorText.value
})

/* 💥💥💥💥💥 EVENT INPUT TEXT BACKGROUND COLOR 💥💥💥💥💥 */
$inputBackgroundText.addEventListener("input", () => {
  $labelNameBackgroundText.innerText = $inputBackgroundText.value 
  $pTopText.style.backgroundColor = $inputBackgroundText.value
  $pBottomText.style.backgroundColor = $inputBackgroundText.value
})


/* 💥💥💥💥💥💥 EVENT TEXT TRANSPARENT (CHECKBOX)💥💥💥💥💥💥💥 */
// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗REVISAR❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
$inputCheckboxTransparentBackgroundText = $("#transparent-background-text");

$inputCheckboxTransparentBackgroundText.addEventListener("change", () => {
  $pTopText.style.backgroundColor = "transparent"
  if ($inputCheckboxTransparentBackgroundText.checked) {
    $pTopText.style.backgroundColor = ""
  }
})// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

/* 💥💥💥💥💥💥 EVENT TEXT FONT OUTLINE💥💥💥💥💥💥💥 */
// ??????????????????????????????????????????????????????????
  /* -webkit-text-stroke: 1px white; */


/* 💥💥💥💥💥💥 EVENT TEXT LINE HEIGHT 💥💥💥💥💥💥💥 */
$inputTextLineHeight.addEventListener("input", () => {
  $pTopText.style.lineHeight= $inputTextLineHeight.value
  $pBottomText.style.lineHeight= $inputTextLineHeight.value

})

/* 💥💥💥💥💥💥 EVENT TEXT LETTER SPACING 💥💥💥💥💥💥💥 */
$selectLetterSpacingText.addEventListener("input", () => {
  $pTopText.style.letterSpacing= `${$selectLetterSpacingText.value}px`
  $pBottomText.style.letterSpacing= `${$selectLetterSpacingText.value}px`

})

/* 💥💥💥💥💥💥💥 EVENT RESET PANEL TEX 💥💥💥💥💥💥💥💥 */



