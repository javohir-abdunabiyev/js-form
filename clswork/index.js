const form = document.forms.namedItem('signin')
const inputs = form.querySelectorAll('input')

// inputs[0].onkeydown = (e) => {
//     console.log(inputs[0].value);
// }
// inputs[0].onkeyup = (e) => {
//     console.log(inputs[0].value);
// }
// inputs[0].oninput = (e) => {
//     console.log(inputs[0].value);
// }

// inputs[0].onfocus = () => {
//     console.log('focused');
// }
// inputs[0].onblur = () => {
//     const parent = inputs[0].parentElement
//     if(inputs[0].value.length === 0 && parent.classList.contains('req')) {
//         parent.classList.add('error')
//     }
// }

form.onsubmit = (e) => {
    e.preventDefault();
    let error_counter = 0
    

    inputs.forEach(inp => {
        const parent = inp.parentElement
        if(inp.value.length === 0 && parent.classList.contains('req')) {
            parent.classList.add('error')
            error_counter++
        }
    })
    

    if(error_counter > 0) {
        console.log(error_counter);
        return
    }
    submit(e)
}







function submit(e) {
    const user = {}
    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)


    console.log(user);
}
