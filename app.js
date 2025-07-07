// for image changing

const defImg = document.getElementById('defImg');

defImg.addEventListener('click', function(){
  document.getElementById('bg').style.backgroundImage = "url('(I.G-SAM_BOBS) 186.jpg')";
})

// using the function inline with onclick
function firstImg(){
  document.getElementById('bg').style.backgroundImage = "url('(I.G-SAM_BOBS) 217.jpg')";
}
// function secondImg(){
//   document.getElementById('bg').style.backgroundImage = "url('(I.G-SAM_BOBS) 186.jpg')";
// }
function thirdImg(){
  document.getElementById('bg').style.backgroundImage = "url('(I.G-SAM_BOBS) 187.jpg')";
}

function opn(){
  document.getElementById('menu').
  style.display = 'block';

  document.getElementById('clos').
  style.display = 'block';

  document.getElementById('open').
  style.display = 'none';
}


function cls(){
}