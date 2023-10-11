const body=document.querySelector('body')
const color=document.querySelectorAll('.color')

color.forEach(function (btn) {
    
    btn.addEventListener('click',function (e) {
        if(e.target.id=== "blueviolet"){
        body.style.backgroundColor=e.target.id
        body.style.color="white"
        }
        if (e.target.id==="brown") {
            body.style.backgroundColor=e.target.id
            body.style.color="white";
        }
    })
})