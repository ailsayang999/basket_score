let players = [
    { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
    { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
    { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
    { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
    { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
  ]
  
  
  const dataPanel = document.querySelector('#data-panel')
  
  
  //函式//
  function displayPlayerList(players){
    let panelContent = ""
    
    players.forEach( (item) =>{    
      panelContent += `<tr>`
    
      //在 物件專用的for-in迴圈裡面，我們必須使用 item[key] 來取得 value
      for (let key in item) {
        if(key === 'name'){
        panelContent += `
            <td>${item[key]}</td>
         `
        } else{
        panelContent += `
            <td><span style ='font-size:25px'>${item[key]}</span>
            <span class= 'fa fa-plus-circle up'></span> 
            <span class= 'fa fa-minus-circle down'></span> </td>
      `
      }
      }
    }
    )
    panelContent += `</tr>`
    
    return panelContent  
  }
  
  
dataPanel.innerHTML = displayPlayerList(players)
  
  
// Add button function
dataPanel.addEventListener('click', function(event){
  let target = event.target
  const scoreBox = target.parentElement.firstElementChild.innerHTML
  let score = parseInt(scoreBox,10)
  if (target.classList.contains('up')){
    score += 1
    target.previousElementSibling.innerHTML = score
  } else if(target.classList.contains('down')){
    //如果數字大於零才可以扣分，扣到零為止
    if(score > 0){
      score -= 1
      target.parentElement.firstElementChild.innerHTML = score
    }
  }
})