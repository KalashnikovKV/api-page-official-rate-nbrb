
let list = document.querySelector('.posts')

fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
.then(res => res.json())
.then(data => {    
    for (const key in data) {
        list.innerHTML += ` 
        <tr class="post">
        <td><b>${data[key].Cur_Scale}</b></td>
        <td>${data[key].Cur_Name }</td>
        <td>${data[key].Cur_Abbreviation}</td>
        <td><b>${data[key].Cur_OfficialRate}</b></td>
        </tr>`
    }
})
.catch(err => console.log(err))

