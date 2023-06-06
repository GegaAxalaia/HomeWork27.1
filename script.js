//1
click.onclick = remove;

function remove() {
    this.remove();
};
//2
let img = document.createElement('img');
img.src = "Cat03.jpg";
document.body.appendChild(img);
img.style.height = "100px"
img.style.width = "100px"