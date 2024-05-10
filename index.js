const form = document.forms.namedItem('application')
const inps = form.querySelectorAll('input')
const all = document.querySelectorAll('.all_count')
const n_toFill_inps = form.querySelectorAll('.need_to_fill')
const fill_txt = form.querySelectorAll('.fill')
const span = form.querySelectorAll('span')
const from = document.querySelector('.from')
const errored = document.querySelector('.errored') 
const success = document.querySelector('.scs')





all.forEach(n => {
    n.innerText = inps.length
})

from.innerText = n_toFill_inps.length

form.onsubmit = (event) => {
    event.preventDefault();

    inps.forEach(inp => {
        let successed = 0

        for(let i = 0; i < inps.length; i++) {
            if(inps[i].value.length > 0) {
                successed++;
                success.innerText = successed
            }
        }
    })

    let count = 0
        
    for(let i = 0; i < n_toFill_inps.length; i++) {
        if(n_toFill_inps[i].value === "") {
            count++;
            errored.innerText = count
        }

    }

    let error = false

    n_toFill_inps.forEach(inp => {
        

        console.log(count);

        let txt = "Fill all inputs"

        if(inp.value.length === 0) {
            error = true;

            inp.classList.add('errored_inp')


            fill_txt.forEach(fill => {
                fill.classList.add('fill_new_cls')
            })
    
    
            span.forEach(sp => {
            sp.classList.add('fill_new_cls')
            sp.innerText  = txt
        })

        } 

        

         
    })

    if(error) {
        alert('Fill all inputs')
        return
    }


    if(!error) {
        const user= {}

        const fm = new FormData(form)

        fm.forEach((val, key) => {
            user[key] = val
        })

        console.log(user)
        form.reset()

        
    }
    
}
