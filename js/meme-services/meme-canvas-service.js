'use strict'

let gElCanvas
let gCtx
let gCurrShape
let gStartLinePos

function initCanvas() {
    gElCanvas = document.querySelector('.canvas-container')
    gCtx = gElCanvas.getContext('2d')
    gStartLinePos = {
        left: 30,
        center: gElCanvas.width / 2,
        right: gElCanvas.width - 30
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
        gCtx.lineWidth = 1
        gCtx.strokeStyle = line.strokeColor
        gCtx.fillStyle = line.color
        gCtx.font = `${line.size}px ${line.fontFamily}`
        gCtx.fillText(memeTxt, x, y)
        gCtx.strokeText(memeTxt, x, y)
    }
    )
}


function clearLine(){
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function saveAndRestore() {
    gCtx.font = '30px Arial'
    gCtx.strokeStyle = 'green'
    gCtx.strokeText('Saving the context', 10, 50)
    gCtx.save() // Saves the current drawing style state using a stack.
    gCtx.strokeStyle = 'black'
    gCtx.strokeText('Switching to something else', 10, 100)
    gCtx.restore() // Restores the drawing style state to the last element on the 'state stack' saved by save().
    gCtx.strokeText('Back to previous context', 10, 150)
  }
  