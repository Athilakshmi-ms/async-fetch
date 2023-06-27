/*
const request = fetch('document.txt')
console.log('Making the request:', request) // Promise is pending

const response = request.then(response => response.text())
console.log('Treating the response', response) // Promise is pending

response.then(text => {
  console.log(text)
})

fetch('document.txt')
.then(response => response.text())
.then(text => {
  const p = document.createElement('p')
  p.textContent = text

  document.body.appendChild(p)
})

fetch('document.txt')
.then(response => response.text())
.then(text => {
  const p = document.createElement('p')
  p.textContent = text

  document.body.appendChild(text)
})
.catch(error => {
  console.log('There was an error!', error)
})

const fetchName = (name => fetch('https://api.agify.io/?name=' + name))

fetchName('Athi')
.then(response => response.json())
.then(jsonfile => {
  console.log(jsonfile.age)
  console.log(jsonfile.count)
  console.log(jsonfile.name)
})
.catch(error => {
  console.log('There was an error!', error)
})
*/

//Exercise 1

let displayRules = () => {
fetch('becode.json')
.then(response => response.json())
.then(jsonFile => {
    for(i=0; i<jsonFile.length; i++){
        let unordList = document.createElement('ul');
        let list = document.createElement('li')
        unordList.appendChild(list)
        document.body.appendChild(unordList)
        list.innerText = jsonFile[i]
    }
})
.catch(error => {
    console.log('There was an error!', error)
  })
}



    