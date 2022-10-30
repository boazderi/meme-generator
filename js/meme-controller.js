'use strict'


const gElMemeEditor = document.querySelector('.meme-editor-container')
const gElSavedMemes = document.querySelector('.saved-memes-container')
const gElGallery = document.querySelector('.images-gallery')

const gElMainSections = [gElMemeEditor, gElSavedMemes, gElGallery]
let gLastMemeId

function onInit() {
    console.log('start init');
    initCanvas()
    initGallery()
    renderGallery()
}

function renderMeme() {
    const elEditorTitle = document.querySelector('.editor-link')
    onNavClick(elEditorTitle, false)
    const currMeme = getMeme()
    const currMemeImgPath = gImgs.find(img => img.id === currMeme.selectedImgId).url
    const currMemeTxt = currMeme.lines[gMeme.selectedLineIdx].txt
    drawImgAndTxt(currMemeImgPath, currMemeTxt)
}


function onToggleMenu() {
    const elButton = document.querySelector('.btn-humburger')
    document.querySelector('body').classList.toggle('open-menu')
    elButton.innerText = elButton.innerText === '☰' ? 'X' : '☰'
}

function onNavClick(elLinkClicked, isMenue=true ) {
    const elNavs = document.querySelectorAll('.head-btn')
    if (isMenue) onToggleMenu()
    for (var i = 0; i < elNavs.length; i++) {
        elNavs[i].classList.remove('clicked')
        gElMainSections[i].classList.add('hide')
    }
    elLinkClicked.classList.add('clicked')
    const currTitle = elLinkClicked.innerText
    if (currTitle === 'Gallery') {
        gElGallery.classList.remove('hide')
    } else if (currTitle === 'Memes') {
        onMemesClicked()
        gElSavedMemes.classList.remove('hide')
    } else {
        gElMemeEditor.classList.remove('hide')
    }
}



function onTxtInput(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onChangeFontSize(num) {
    setFontSize(num)
    renderMeme()
}

function onAddLine() {
    addTextLine()
    document.querySelector('.text-editor-input').value = ''
    renderMeme()
}

function onSwitchLines() {
    document.querySelector('.text-editor-input').value = gMeme.lines[gMeme.selectedLineIdx + 1].txt
    switchLines()
}

function onAlignText(direction) {
    setAlignTxt(direction)
    renderMeme()
}

function onDeleteLine() {
    clearLine()
    document.querySelector('.text-editor-input').value = ''
    renderMeme()
}

function onSaveMeme() {
    saveMemeToStorage()
}

function onMemesClicked() {
    const currMemes = getSavedMemes()
    if (currMemes){
        let imgsStr = ``
        currMemes.forEach((img) => {
            imgsStr += `
            <img src="${img.url}" class="saved-meme" onclick="onImgSelect(${img.id})" class="grid-img img${img.id}" alt="">
            `
        })
        gElSavedMemes.innerHTML = imgsStr
    }
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my paint - boaz'
}

function uploadImgToFacebook() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")// Gets the canvas content as an image format
    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`
        // Create a link that on click will make a post in facebook with the image we uploaded
        document.querySelector('.share-container').innerHTML = `
          <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
             Share   
          </a>`
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as:
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function onChangeFont(fontName) {
    setFontStyle(fontName)
}

function onRandomImage() {
    const currImage = getRandomImage()
}

function onAddEmoji(elEmoji){
    const elTextInput = document.querySelector('.text-editor-input')
    const currEmoji = elEmoji.innerText
    elTextInput.value += currEmoji
    console.log('elEmoji.innerText',elEmoji.innerText);
    const txt = elTextInput.value
    setLineTxt(txt)
    renderMeme()
}

function onDragLine(diff){
    setlineHeight(diff)
    renderMeme()
}