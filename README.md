# beginner-JavaScript-Project-color-changer-project

## Project-ScreenShot

![Alt text](p1.jpg?raw=true "Screen Shots")

![Alt text](p2.jpg?raw=true "Screen Shots")

# Solution Code
```javascript

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

```
