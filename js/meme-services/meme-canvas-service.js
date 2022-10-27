'use strict'

let gElCanvas
let gCtx
let gCurrShape
let gStartLinePos

function initCanvas() {
    gElCanvas = document.querySelector('.canvas-container')
    gCtx = gElCanvas.getContext('2d')
    gStartLinePos = {
        left: 50,
        center: gElCanvas.width / 2,
        right: gElCanvas.width - 50
    }
}


function drawImgAndTxt(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTxt()
    }
}


function drawTxt() {
    console.log('start draw');
    gMeme.lines.forEach(line => {
        const memeTxt = line.txt
        const y = line.heightLine
        const x = gStartLinePos[line.align]
        gCtx.textAlign = line.align
        gCtx.lineWidth = 2
        gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
        gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
        gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
        gCtx.fillText(memeTxt, x, y)
        gCtx.strokeText(memeTxt, x, y)
    }
    )
}
