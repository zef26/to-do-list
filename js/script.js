let doc = document

let form = doc.querySelector('#form')
let inp = doc.querySelector("#taskInput")
let task_list = doc.querySelector('#tasksList')
let empty = doc.querySelector('#emptyList')

form.addEventListener('submit', add_task)


function add_task (event){
    event.preventDefault()
    let task = inp.value
    
    
    let task_html = `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${task}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li>`
    
    
    task_list.insertAdjacentHTML('beforeend',task_html)
    
    inp.value = '' 
    inp.focus()
    
    if(task_list.children.length >= 1){
        empty.classList.add('none')
    }
    
  
    
}


task_list.addEventListener('click' , delite)

function delite(event){
    if(event.target.dataset.action !== 'delete') return

    let paren = event.target.closest('li')
    paren.remove()

    if(task_list.children.length == 1){
        empty.classList.remove('none')
    }
    


}

task_list.addEventListener('click',done)

function done(event){

    if(event.target.dataset.action !== 'done') return

    if(event.target.dataset.action == 'done'){
        let paren = event.target.closest('li')
        paren.classList.toggle('green')
    }

}

