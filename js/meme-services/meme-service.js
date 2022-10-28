'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gKeyWords = [
    ['fake news!', 'trump'],
    ['dogs', 'pats'],
    ['baby', 'dog', 'bed'],
    ['cat', 'keyboard', 'sleeping'],
    ['baby', 'yes', 'victory'],
    ['guy', 'history'],
    ['baby', 'black', 'big eyes'],
    ['joker', 'funny', 'commedy'],
    ['joke', 'baby'],
    ['obama', 'president', 'lough'],
    ['sport', 'gays', 'boxers'],
    ['haim hecht', 'zadik', 'honesty'],
    ['dicaprio', 'congratulations'],
    ['matrix'],
    ['no chance', 'guy'],
    ['lol', 'are you serious'],
    ['putin', 'dictator'],
    ['toy story'],
]
var gImgs = []
let gCurrColor

let edditorStatus = {
    gGalleryIsOn: true,
    gMemeStatus: false
}

const gFonts = [
    'Impact',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'Sans-Serif'
]

createSqureImgs()

function createSqureImgs() {
    for (var i = 1; i < 19; i++) {
        gImgs.push({
            id: i,
            url: `./img/meme-imgs (square)/${i}.jpg`,
            keywords: gKeyWords[i - 1]
        })
    }
}


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'FAKE NEWS!!!',
        size: 30,
        align: 'center',
        color: 'black',
        heightLine: 30,
        fontFamily: 'Impact'
    }]
}

function getMeme(id) {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}


function getGalleryImages() {
    return gImgs
}


function setImg(imgid) {
    gMeme.selectedImgId = imgid
}

// function setColor(newColor) {
//     gCurrColor = newColor
//     gMeme.lines[gMeme.selectedLineIdx].color = gCurrColor
// }

function setColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

function setFontSize(num) {
    gMeme.lines[gMeme.selectedLineIdx].size += num
}

function addTextLine() {
    if (gMeme.lines.length > 1) return
    gMeme.lines.push(
        {
            txt: '',
            size: 30,
            align: 'center',
            color: gCurrColor,
            heightLine: gElCanvas.height - 20
        }
    )
    gMeme.selectedLineIdx++
}


function switchLines(){
    if(gMeme.lines.length === 1) return
    [gMeme.lines[0], gMeme.lines[1]] = [gMeme.lines[1], gMeme.lines[0]]
}

function setAlignTxt(direction){
    gMeme.lines[gMeme.selectedLineIdx].align = direction
}


function setFontStyle(fontName){
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = fontName
}