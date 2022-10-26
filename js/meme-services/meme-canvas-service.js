'use strict'

let gElCanvas
let gCtx
let gCurrShape


function initCanvas() {
    gElCanvas = document.querySelector('.canvas-container')
    gCtx = gElCanvas.getContext('2d')
}



function drawItem(itemDetails) {
    const drawKey = Object.keys(itemDetails)[0]
    console.log('drawKey', drawKey)
    switch (drawKey) {
        case 'img':
            drawImg(itemDetails[drawKey])
            break;
        case 'txt':
            let memeTxt = itemDetails[drawKey].currMemeTxt
            let x = itemDetails[drawKey].x
            let y = itemDetails[drawKey].y
            drawTxt(memeTxt, x, y)
            break;
        case 'img':
            drawImg(itemDetails[drawKey])
            break;

        default:
            break;
    }

}

function drawImg(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}


function drawTxt(memeTxt, x, y) {
    console.log('memeTxt', memeTxt);
    gCtx.
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
    gCtx.fillText(memeTxt, x, y)
    gCtx.strokeText(memeTxt, x, y)
}

