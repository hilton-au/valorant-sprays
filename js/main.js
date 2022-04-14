let list = document.querySelector('select')
let sprayList = document.querySelector('#spray-list')
document.querySelector('button').addEventListener('click', getValoList)

fetch('https://valorant-api.com/v1/sprays')
    .then(sprays => sprays.json())
    .then(data => {
        data.data.forEach(set => {
            let newLi = document.createElement('option')
            newLi.className = 'sprayNames'
            newLi.innerText = set.displayName
            newLi.addEventListener('click', getValoSpray)
            list.appendChild(newLi)
            // console.log(set.displayName)
        })
    })

function getValoList(){
    (sprayList.style.display === 'none') ? sprayList.style.display = 'flex' : sprayList.style.display = 'none'
}


function getValoSpray(){
    fetch('https://valorant-api.com/v1/sprays')
    .then(sprays => sprays.json())
    .then(data => {
        let spray = document.querySelector('#spray').value
        console.log(spray)
        let selected = data.data.filter(val => val.displayName === spray)[0]
        let displaySpray = (selected.animationGif !== null) ? selected.animationGif : 
        (selected.animationPng !== null) ? selected.animationPng :
        (selected.fullTransparentIcon !== null) ? selected.fullTransparentIcon:
        (selected.fullIcon !== null) ? selected.fullIcon: selected.displayIcon
        document.querySelector('img').src = displaySpray
        console.log(data.data[0])
    })
}