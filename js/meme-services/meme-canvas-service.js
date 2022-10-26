'use strict'

let gElCanvas
let gCtx
let gCurrShape


function initCanvas() {
    gElCanvas = document.querySelector('.canvas-container')
    gCtx = gElCanvas.getContext('2d')
}


function drawImgAndTxt(imgUrl, memeTxt, x, y) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt(memeTxt, x, y)
    }
}


function drawTxt(memeTxt, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gMeme.lines[0].color
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.font = `${gMeme.lines[0].size}px Arial`
    gCtx.fillText(memeTxt, x, y)
    gCtx.strokeText(memeTxt, x, y)
}

