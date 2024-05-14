const add_img = document.querySelector('.imgs')

function addImg(input) {
    let imgFile = input.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(imgFile)

    reader.onload = function () {
        let img = document.createElement('img');
        add_img.appendChild(img);
        img.src = reader.result;
    }
}