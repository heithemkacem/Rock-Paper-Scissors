const player = document.querySelector("[data-you-score]")
const computer = document.querySelector("[data-computer-score]")

const selectorsArray = [

    {
        name: 'Rock',
        beats: 'Scissors'
    },
    {
        name: 'Paper',
        beats: 'Roks'
    },
    {
        name: 'Scissors',
        beats: 'Paper'
    }
]


const selectors = document.querySelectorAll("[data-selection]")
selectors.forEach(selectors => {
    selectors.addEventListener("click", e => {
        const selectionName = selectors.dataset.selection;
        const selection = selectorsArray.find(selection => selection.name === selectionName)
        makeselection(selection)
    })
})

function makeselection(selection) {
    const computerSelection = randomSelection()
    if (selection.name === computerSelection.beats) {

        incrementScore(computer)
    } else {
        incrementScore(player)
    }
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * selectorsArray.length)
    return selectorsArray[randomIndex]
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}