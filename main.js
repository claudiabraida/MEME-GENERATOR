/* ✨✨✨✨✨ UNIVERSAL SELECTOR FUNCTION ✨✨✨✨✨ */
const $ = element => document.querySelector(element);

/* ____________________________ VARIABLES ____________________________ */

/*💠💠💠💠💠💠💠💠 VARIABLES HEADER BUTTONS NAV 💠💠💠💠💠💠💠 */
const $buttonImage = $(".button-image");
const $buttonText = $(".button-text");


/* 💠💠💠💠💠💠💠 VARIABLES MAIN IMAGE-MEME / URL 💠💠💠💠💠💠💠*/
const $divImageMeme = $(".image-meme");
const $inputUrlImageMeme = $("#url-image-meme");
const $inputImageSize = $("#image-size")


/* 💠💠💠💠💠💠💠 VARIABLES COLOR BACKGROUND IMAGE  💠💠💠💠💠💠💠*/
const $inputColorBackgroundColorImage = $("#background-color-image");
const $labelBackgroundColorImage = $(".name-background-color-image");


/* 💠💠💠💠 VARIABLES SELECT- OPTIONS COLOR BACKGROUND IMAGE 💠💠💠💠 */
const $selectBackgroundColor = $("#select-background-color")

const $optionNone = $("#none")  
const $optionLighten = $("#lighten")  
const $optionDarken = $("#darken")  
const $optionDiffernce = $("#difference")
const $optionLuminosity = $("#luminosity")  
const $optionMultiply = $("#multiply") 


/* 💠💠💠💠💠💠💠💠 VARIABLES FILTERS IMAGE 💠💠💠💠💠💠💠💠 */ 
const $inputRangeBrightness = $("#brightness");
const $inputRangeOpacity = $("#opacity");
const $inputRangeContrast = $("#contrast");
const $inputRangeBlur = $("#blur")
const $inputRangeGrayscale = $("#grayscale")
const $inputRangeSepia = $("#sepia")
const $inputRangeHue = $("#hue")
const $inputRangeSaturate = $("#saturate")
const $inputRangeInvert = $("#invert")
const $buttonReset = $("#reset");


/* 💠💠💠💠💠💠💠💠 VARIABLES PANELS CONTROLS 💠💠💠💠💠💠💠💠 */
const $asideImagePanelControls = $(".image-panel-controls");
const $asideTextPanelControls = $(".text-panel-controls");


/* 💠💠💠💠💠 VARIABLES BUTTONS CLOSE PANELS CONTROLS 💠💠💠💠💠 */
const $buttonCloseImagePanelControls = $(".close-image-panel-controls");
const $buttonCloseTextPanelControls = $ (".close-text-panel-controls");


/* 💠💠💠💠💠💠 VARIABLES TOP TEXT  (PANEL TEXT) 💠💠💠💠💠💠 */
const $sectionContainerMeme = $("container-meme");
const $pTopText = $(".top-text");
const $textareaTopText = $("#top-text");
const $inputCheckboxNoTopText = $("#no-top-text");


/* 💠💠💠💠💠💠 VARIABLES BOTTOM TEXT (PANEL TEXT) 💠💠💠💠💠💠 */
const $pBottomText = $(".bottom-text");
const $textareaBottomText = $("#bottom-text");
const $inputCheckboxNoBottomText = $("#no-bottom-text");


/* _____________________________ FUNTIONS _____________________________ */

/* 💡💡💡💡💡💡💡💡💡💡💡 FUNTION FILTER FUSION  💡💡💡💡💡💡💡💡💡💡💡 */
function fusion () {$divImageMeme.style.filter = `
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
function resetValues () {
  $inputImageSize.min = "0"
  $inputImageSize.value = "100"
  $inputImageSize.max = "300"
  $inputImageSize.step = "1"
   
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

 /* INITIAL VALUES IMAGE-SIZE */
  $divImageMeme.style.backgroundSize = `${$inputImageSize.value}%`
  $divImageMeme.style.filter = fusion()
}
resetValues()


/* 💥💥💥💥💥💥💥💥 EVENT FILTER FUSION IMAGE 💥💥💥💥💥💥💥💥 */
$inputRangeBrightness.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeOpacity.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeContrast.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

  
});

$inputRangeBlur.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeGrayscale.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeSepia.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeHue.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeSaturate.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});

$inputRangeInvert.addEventListener("input", () => {
  $divImageMeme.style.filter = fusion()

});


/* _____________________________ EVENTS _____________________________ */

/* 💥💥💥💥💥💥💥 EVENT BUTTON RESET FILTERS IMAGE 💥💥💥💥💥💥💥 */
$buttonReset.addEventListener("click", resetValues);

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


/* 💥💥💥💥💥💥💥💥💥💥 EVENT IMAGE SIZE 💥💥💥💥💥💥💥💥💥💥 */ 
$inputImageSize.addEventListener("input", () => {
  $divImageMeme.style.backgroundSize = `${$inputImageSize.value}%`
})

/* 💥💥💥💥💥💥 EVENT BUTTONS CLOSE PANELS CONTROLS 💥💥💥💥💥💥 */
$buttonCloseImagePanelControls.addEventListener("click", () => {
  $asideImagePanelControls.style.display = "none"
})


$buttonCloseTextPanelControls.addEventListener("click", () => {
  $asideTextPanelControls.style.display = "none"
})


/* 💥💥💥💥💥💥💥 EVENT URL IMAGE (PANEL IMAGE) 💥💥💥💥💥💥💥 */
$inputUrlImageMeme.addEventListener("input", () => {
  $divImageMeme.style.backgroundImage = `url(${$inputUrlImageMeme.value})`
})





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
   

/* ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ */ 

