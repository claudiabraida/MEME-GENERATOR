
/* ✨✨✨✨✨ UNIVERSAL SELECTOR FUNCTION ✨✨✨✨✨ */
const $ = element => document.querySelector(element);

/* ============================ VARIABLES ============================ */

/* 💠💠💠💠💠💠💠💠 VARIABLES LIGHT MODE DARK MODE 💠💠💠💠💠💠💠💠 */
const $bodyDarkMode = $(".body-dark-mode");
const $divBoxInputBackgroundColorImage = $(".box-input-background-color-image")
const $legendTitleColor = $(".title-color");
const $legendTitleBackground = $(".title-background");
const $boxColorText = $(".box-color-text");
const $boxBackgroundText = $(".box-background-text");
const $nameBackgroundText = $(".name-background-text");
const $nameColorText = $(".name-color-text");
/*💠💠💠💠💠💠💠💠 VARIABLES HEADER TITLE MEME 💠💠💠💠💠💠💠 */
const $header = $("header");
const $titleMeme = $(".title-meme");

/*💠💠💠💠💠💠💠💠 VARIABLES HEADER BUTTONS NAV 💠💠💠💠💠💠💠 */
const $buttonImage = $(".button-image");
const $buttonText = $(".button-text");
const $buttonMode = $(".button-mode");

/*💠💠💠💠💠💠💠💠 VARIABLES CONTAINER MEME 💠💠💠💠💠💠💠 */
const $main = $("main");
const $containerMeme = $(".container-meme");
const $pTopTextMeme = $(".top-text-meme");
const $divImageMeme = $(".image-meme");
const $pBottomTextMeme = $(".bottom-text-meme");

/*💠💠💠💠💠💠💠💠 DOWNLOAD MEME 💠💠💠💠💠💠💠 */
const $buttonDownloadMeme = $(".download-meme");

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
const $textareaTopText = $("#top-text-area");
const $checkboxNoTopText = $("#checkbox-no-top-text");

/* 💠💠💠💠💠💠 VARIABLES TEXTAREA BOTTOM TEXT (PANEL TEXT) 💠💠💠💠💠💠 */
const $textareaBottomText = $("#bottom-text-area");
const $checkboxNoBottomText = $("#checkbox-no-bottom-text");

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
const $checkboxTransparentBackgroundText = $("#checkbox-transparent-background-text");

/* 💠💠💠 VARIABLE TEXT FONT OUTLINE (contorno de texto) 💠💠💠 */
// ????????????????????????????????????????????????????????????
const $buttonNoTextOutline = $("#no-text-outline");
const $buttonLightTextOutline = $("#light-text-outline");
const $buttonDarkTextOutline = $("#dark-text-outline");

/* 💠💠💠💠💠💠 VARIABLE TEXT LINE HEIGH 💠💠💠💠💠💠💠 */
const $inputTextLineHeight = $("#input-text-line-height");// interlineado

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
  /* .... header .... */
  $header.style.background = `linear-gradient( #a262c6,  #a693e1, #ba53ff)`
  /* .... title meme .... */
  $titleMeme.style.color = "#000000"
  /* .... button nav menu .... */
  $buttonImage.style.color = "#1e0839"
  $buttonText.style.color = "#1e0839"
  $buttonMode.style.color = "#1e0839"
  /* .... main .... */
  $main.style.backgroundColor = "#d796f8"
  /* .... button download .... */
  $buttonDownloadMeme.style.backgroundColor = "#af7df9"
  $buttonDownloadMeme.style.color = "#000000"
  /* .... button close text panel controls.... */
  $buttonCloseTextPanelControls.style.color = "#000000"
  $buttonCloseImagePanelControls.style.color = "#000000"
  /* .... panels .... */
  $asideImagePanelControls.style.backgroundColor = "#be9be8"
  $asideTextPanelControls.style.backgroundColor = "#be9be8"
  $asideImagePanelControls.style.color = "#000000"
  $asideTextPanelControls.style.color = "#000000"
  /* .... input url .... */
  $inputUrlImageMeme.style.backgroundColor = "#e4ceff"
  /* .... input color image  .... */
  $divBoxInputBackgroundColorImage.style.backgroundColor = "#e4ceff"
  $divBoxInputBackgroundColorImage.style.color = "#000000"
  /* .... select blend mode image .... */
  $selectBlendModeImage.style.backgroundColor = "#e4ceff"
  $selectBlendModeImage.style.color = "#000000"
  /* .... button reset .... */
  $buttonResetFilterImage.style.backgroundColor = "#e4ceff"
  $buttonResetFilterImage.style.color = "#000000"
  /* .... textarea top text .... */
  $textareaTopText.style.backgroundColor = "#e4ceff"
  $textareaTopText.style.color = "#000000"
  /* .... textarea bottom text .... */
  $textareaBottomText.style.backgroundColor = "#e4ceff"
  $textareaBottomText.style.color = "#000000"
  // /* .... select font ... */
  $selectFontFamily.style.backgroundColor = "#e4ceff"
  $selectFontFamily.style.color = "#000000"
  /* .... align left .... */
  $inputFontSizeText.style.backgroundColor = "#e4ceff"
  $inputFontSizeText.style.color = "#000000"
  /* .... align left .... */
  $inputButtonAlignLeft.style.backgroundColor = "#e4ceff"
  $inputButtonAlignLeft.style.color = "#000000"
  /* .... align center .... */
  $inputButtonAlignCenter.style.backgroundColor = "#e4ceff"
  $inputButtonAlignCenter.style.color = "#000000"
  /* .... align right .... */
  $inputButtonAlignRight.style.backgroundColor = "#e4ceff"
  $inputButtonAlignRight.style.color = "#000000"
  /* .... title color .... */
  $legendTitleColor.style.color = "#000000"
  /* .... box color text .... */
  $boxColorText.style.backgroundColor = "#e4ceff"
  $boxColorText.style.color = "#000000"
  /* .... title background .... */
  $legendTitleBackground.style.color = "#000000"
  /* .... box background color text .... */
  $boxBackgroundText.style.backgroundColor = "#e4ceff"
  $boxBackgroundText.style.color = "#000000"
  /* .... no-text-outline .... */
  $buttonNoTextOutline.style.backgroundColor = "#e4ceff"
  $buttonNoTextOutline.style.color = "#000000"
  /* .... light text outline .... */
  $buttonLightTextOutline.style.backgroundColor = "#e4ceff"
  $buttonLightTextOutline.style.color = "#000000"
  /* .... dark text outline .... */
  $buttonDarkTextOutline.style.backgroundColor = "#e4ceff"
  $buttonDarkTextOutline.style.color = "#000000"
  /* .... text-lineheight .... */
  $inputTextLineHeight.style.backgroundColor = "#e4ceff"
  $inputTextLineHeight.style.color = "#000000"
  /* .... select-letter-spacing-text .... */
  $selectLetterSpacingText.style.backgroundColor = "#e4ceff"
  $selectLetterSpacingText.style.color = "#000000"

  if($bodyDarkMode.classList.contains("body-dark-mode")) {
    $bodyDarkMode.classList.remove("body-dark-mode")
    $bodyDarkMode.classList.add("body-light-mode")

  } else {
    $bodyDarkMode.classList.remove("body-light-mode")
    $bodyDarkMode.classList.add("body-dark-mode")
    $buttonMode.innerText = "Modo Oscuro"
    /* .... header .... */
    $header.style.background = ""
    /* .... title meme .... */
    $titleMeme.style.color = "#ffffff"
    /* .... button nav menu .... */
    $buttonImage.style.color = "whitesmoke"
    $buttonText.style.color = "whitesmoke"
    $buttonMode.style.color = "whitesmoke"
    /* .... main ... */
    $main.style.backgroundColor = "#570b55"
    /* .... button download .... */
    $buttonDownloadMeme.style.backgroundColor = "#6c29ab"
    $buttonDownloadMeme.style.color = "#ffffff"
    /* .... button close text panel controls.... */
    $buttonCloseTextPanelControls.style.color = "#ffffff"
    $buttonCloseImagePanelControls.style.color = "#ffffff"

    /* .... panels .... */
    $asideImagePanelControls.style.backgroundColor = "#2f1130"
    $asideTextPanelControls.style.backgroundColor = "#2f1130"
    $asideImagePanelControls.style.color = "#ffffff"
    $asideTextPanelControls.style.color = "#ffffff"
    /* .... input url ... */
    $inputUrlImageMeme.style.backgroundColor = "#66487a"
    /* .... input color image .... */
    $divBoxInputBackgroundColorImage.style.backgroundColor = "#66487a"
    $divBoxInputBackgroundColorImage.style.color = "#ffffff"
    /* .... select blend mode image .... */
    $selectBlendModeImage.style.backgroundColor = "#66487a"
    $selectBlendModeImage.style.color = "#ffffff"
    /* .... button reset  .... */
    $buttonResetFilterImage.style.backgroundColor = "#6c29ab"
    $buttonResetFilterImage.style.color = "#ffffff"
    /* .... textarea top text .... */
    $textareaTopText.style.backgroundColor = "#66487a"
    $textareaTopText.style.color = "#ffffff"
    /* .... textarea bottom text ... */
    $textareaBottomText.style.backgroundColor = "#66487a"
    $textareaBottomText.style.color = "#ffffff"
    /* .... select font .... */
    $selectFontFamily.style.backgroundColor =  "#66487a"
    $selectFontFamily.style.color = "#ffffff"
    /* .... font size .... */
    $inputFontSizeText.style.backgroundColor = "#66487a"
    $inputFontSizeText.style.color = "#ffffff"
    /* .... align left .... */
    $inputButtonAlignLeft.style.backgroundColor = "#66487a"
    $inputButtonAlignLeft.style.color = "#ffffff"
    /* .... align center ..... */
    $inputButtonAlignCenter.style.backgroundColor = "#66487a"
    $inputButtonAlignCenter.style.color = "#ffffff"
    /* .... align right .... */
    $inputButtonAlignRight.style.backgroundColor = "#66487a"
    $inputButtonAlignRight.style.color = "#ffffff"
    /* .... title color .... */
    $legendTitleColor.style.color = "#ffffff"
    /* .... box color text .... */
    $boxColorText.style.backgroundColor = "#66487a"
    $boxColorText.style.color = "#ffffff"
    /* .... title background .... */
    $legendTitleBackground.style.color = "#ffffff"
    /* .... box background color text .... */
    $boxBackgroundText.style.backgroundColor = "#66487a"
    $boxBackgroundText.style.color = "#ffffff"
    /* .... no-text-outline .... */
    $buttonNoTextOutline.style.backgroundColor = "#66487a"
    $buttonNoTextOutline.style.color = "#ffffff"
    /* .... light text outline .... */
    $buttonLightTextOutline.style.backgroundColor = "#66487a"
    $buttonLightTextOutline.style.color = "#ffffff"
    /* .... dark text outline .... */
    $buttonDarkTextOutline.style.backgroundColor = "#66487a"
    $buttonDarkTextOutline.style.color = "#ffffff"
    /* .... text-line height .... */
    $inputTextLineHeight.style.backgroundColor = "#66487a"
    $inputTextLineHeight.style.color = "#ffffff"
    // select-letter-spacing-text
    $selectLetterSpacingText.style.backgroundColor = "#66487a"
    $selectLetterSpacingText.style.color = "#ffffff"

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
$inputBackgroundColorImage.value = "#ffffff"/* default value input color */


$inputBackgroundColorImage.addEventListener("input", () => {
  $labelNameBackgroundColorImage.innerText = $inputBackgroundColorImage.value
  $divImageMeme.style.backgroundColor = $inputBackgroundColorImage.value
})

/* 💥💥💥💥💥💥💥💥 EVENT SELECT BLEND MODE 💥💥💥💥💥💥💥💥 */

// REVISAR: no funciona como el resto de los valores aplicados desde javaScript
// $selectBlendModeImage.value="initial"
// $selectBlendModeImage.value="lighten"
// $selectBlendModeImage.value="darken"
// $selectBlendModeImage.value="difference"
// $selectBlendModeImage.value="luminosity"
// $selectBlendModeImage.value="multiply"

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
  $pTopTextMeme.innerText = $textareaTopText.value
})

/* 💥💥💥💥💥💥💥💥 NO TOP TEXT (checkbox) 💥💥💥💥💥💥💥💥 */
$checkboxNoTopText.addEventListener("change", () => {
  // $pTopTextMeme.style.display = "none"
  $pTopTextMeme.style.visibility = "hidden"

  if ($checkboxNoTopText.checked) {
    $pTopTextMeme.style.visibility = "initial"
  }
})

/* 💥💥💥💥💥💥💥 TEXTAREA BOTTOM TEXT (WRITE)💥💥💥💥💥💥💥 */
$textareaBottomText.addEventListener("input", () => {
  $pBottomTextMeme.innerText = $textareaBottomText.value

})

/* 💥💥💥💥💥💥💥 NO BOTTOM TEXT (checkbox) 💥💥💥💥💥💥💥💥 */
$checkboxNoBottomText.addEventListener("change", () => {
  $pBottomTextMeme.style.visibility = "hidden"

  if ($checkboxNoBottomText.checked) {
    $pBottomTextMeme.style.visibility = "initial"
  }
})

/* 💥💥💥💥💥💥💥 EVENT SELECT / FONT FAMILY 💥💥💥💥💥💥💥 */
/* SPACING VALUES */
$selectLetterSpacingText.value ="2"
$selectLetterSpacingText.value ="4"
$selectLetterSpacingText.value ="6"
$selectLetterSpacingText.value ="8"
$selectLetterSpacingText.value ="10"
$selectLetterSpacingText.value ="12"


/* FONT VALUES */
$selectFontFamily.value="Barrio"
$selectFontFamily.value="Combo"
$selectFontFamily.value="Genos"
$selectFontFamily.value="Griffy"
$selectFontFamily.value="Kranky"
$selectFontFamily.value="Montserrat Alternates"
$selectFontFamily.value="Permanent Marker"
$selectFontFamily.value="Special Elite"
$selectFontFamily.value="Black Ops One"


$selectFontFamily.addEventListener("input", () => {
  $pTopTextMeme.style.fontFamily = $selectFontFamily.value
  $pBottomTextMeme.style.fontFamily = $selectFontFamily.value
})


/* 💥💥💥💥💥💥 EVENT INPUT FONT SIZE TEXT 💥💥💥💥💥💥💥 */

/* FONT SIZE VALUES */
$inputFontSizeText.value="12"
$inputFontSizeText.min="12"
$inputFontSizeText.max="16"

$inputFontSizeText.addEventListener("input", () => {
  $pTopTextMeme.style.fontSize = `${$inputFontSizeText.value}px`
  $pBottomTextMeme.style.fontSize = `${$inputFontSizeText.value}px`
})

/* 💥💥💥💥💥💥💥 EVENT ALIGN-TEXT  💥💥💥💥💥💥💥💥 */
$inputButtonAlignLeft.addEventListener("click", () => {
  $pTopTextMeme.style.textAlign = "left"
  $pBottomTextMeme.style.textAlign = "left"
})

$inputButtonAlignCenter.addEventListener("click", () => {
  $pTopTextMeme.style.textAlign = "center"
  $pBottomTextMeme.style.textAlign = "center"
})

$inputButtonAlignRight.addEventListener("click", () => {
  $pTopTextMeme.style.textAlign = "right"
  $pBottomTextMeme.style.textAlign = "right"
})

/* 💥💥💥💥💥💥💥 EVENT INPUT TEXT COLOR  💥💥💥💥💥💥💥💥 */
$inputColorText.addEventListener("input", () => {
  $labelNameColorText.innerText = $inputColorText.value
  $pTopTextMeme.style.color = $inputColorText.value
  $pBottomTextMeme.style.color = $inputColorText.value
})

/* 💥💥💥💥💥 EVENT INPUT TEXT BACKGROUND COLOR 💥💥💥💥💥 */
$inputBackgroundText.value ="#ffffff" /* default value input color */

$inputBackgroundText.addEventListener("input", () => {
  $labelNameBackgroundText.innerText = $inputBackgroundText.value
  $pTopTextMeme.style.backgroundColor = $inputBackgroundText.value
  $pBottomTextMeme.style.backgroundColor = $inputBackgroundText.value
})


/* 💥💥💥💥💥💥 EVENT TEXT TRANSPARENT (CHECKBOX)💥💥💥💥💥💥💥 */
// $pTopTextMeme.style.backgroundColor = ""
// $pBottomTextMeme.style.backgroundColor = ""

$checkboxTransparentBackgroundText.addEventListener("change", () => {
  $pTopTextMeme.style.backgroundColor = "transparent"
  $pBottomTextMeme.style.backgroundColor = "transparent"

  if ($checkboxTransparentBackgroundText.checked) {
    $pTopTextMeme.style.backgroundColor = $inputBackgroundText.value
    $pBottomTextMeme.style.backgroundColor = $inputBackgroundText.value
  }
})

/* 💥💥💥💥💥💥 EVENT TEXT FONT OUTLINE💥💥💥💥💥💥💥 */
// ??????????????????????????????????????????????????????????
$buttonNoTextOutline.addEventListener("click", () => {
  $pTopTextMeme.style.webkitTextStroke = "initial"
  $pBottomTextMeme.style.webkitTextStroke = "initial"
})

$buttonLightTextOutline.addEventListener("click", () => {
  $pTopTextMeme.style.webkitTextStroke = "1px #ffffff"
  $pBottomTextMeme.style.webkitTextStroke = "1px #ffffff"
})

$buttonDarkTextOutline.addEventListener("click", () => {
  $pTopTextMeme.style.webkitTextStroke = "1px #000000"
  $pBottomTextMeme.style.webkitTextStroke = "1px #000000"
})

/* -webkit-text-stroke: 1px white; */

/* 💥💥💥💥💥💥 EVENT TEXT LINE HEIGHT 💥💥💥💥💥💥💥 */

/* LINE HEIGHT VALUES */
$inputTextLineHeight.value = "1"
$inputTextLineHeight.min = "0"
$inputTextLineHeight.max= "5"

$inputTextLineHeight.addEventListener("input", () => {
  $pTopTextMeme.style.lineHeight = $inputTextLineHeight.value
  $pBottomTextMeme.style.lineHeight = $inputTextLineHeight.value

})

/* 💥💥💥💥💥💥 EVENT TEXT LETTER SPACING 💥💥💥💥💥💥💥 */
$selectLetterSpacingText.addEventListener("input", () => {
  $pTopTextMeme.style.letterSpacing= `${$selectLetterSpacingText.value}px`
  $pBottomTextMeme.style.letterSpacing= `${$selectLetterSpacingText.value}px`

})

/* 💥💥💥💥💥💥💥 EVENT RESET PANEL TEX 💥💥💥💥💥💥💥💥 */
// const $wrapperTextImageMeme = $(".wrapper-text-image-meme")

/* 💥💥💥💥💥💥💥 EVENT DOWNLOAD MEME 💥💥💥💥💥💥💥💥 */
$buttonDownloadMeme.addEventListener("click", () => {
  domtoimage.toBlob($containerMeme).then((blob) => {
    saveAs(blob, "meme.png");
  });

})

