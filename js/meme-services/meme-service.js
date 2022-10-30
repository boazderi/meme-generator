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
    ['obama', 'president', 'laugh'],
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

const gMemesSaved = []

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

function getFilteredKeywords(){
    let filteredKeywords = []
    gKeyWords.forEach(keywords => {
        keywords.forEach(keyword => {
            if (!filteredKeywords.includes(keyword))
            filteredKeywords.push(keyword)
        })
    })
    return filteredKeywords
}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 30,
        align: 'center',
        color: 'black',
        strokeColor: 'white',
        heightLine: 45,
        fontFamily: 'Impact'
    }]
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}


function getGalleryImages() {
    return gImgs
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(newColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
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
            color: 'black',
            strokeColor: 'white',
            heightLine: gElCanvas.height - 45,
            fontFamily: 'Impact'
        }
    )
    switchLines()
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

function getFilteredImgs(key){
    let filteredImgs = gImgs.filter(imgData => {
       return imgData.keywords.some(word => word.includes(key))
    })
    return filteredImgs
}

function saveMemeToStorage(){
    gMemesSaved.push({url: gElCanvas.toDataURL(), id: gMeme.selectedImgId})
    saveToStorage(`savedMemes`, gMemesSaved)
}

function getSavedMemes(){
    const currMemes = loadFromStorage('savedMemes')
    return currMemes
}