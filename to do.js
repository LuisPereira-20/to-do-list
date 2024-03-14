class Tarea {
    constructor(descripcion){
        this.descripcion = descripcion;
        this.completada = false;
    }
    t_completada() {
        this.completada = true;
    }
}

const list_container = [];

function agregar(){
    const n_tarea = document.getElementById("add");
    const descripcion = n_tarea.value.trim();
    if (descripcion !== ""){
        const n_tarea = new Tarea(descripcion);
        list_container.push(n_tarea);
        n_tarea.value = "";
    }
    ver_t()
}

function ver_t (){
    const task = document.getElementById("list-container");
    task.innerHTML = "";
    list_container.forEach ((Tarea, indice)=>{
        const li = document.createElement("li");
        li.textContent=`Tarea ${indice + 1 }: ${Tarea.descripcion}`;
        const eliminar_btn = document.createElement("button");
        const pendiente_btn = document.createElement("button");
        eliminar_btn.id = 'eliminar';
        eliminar_btn.textContent = "X";
        eliminar_btn.onclick = () =>{
            list_container.splice(indice, 1);
            ver_t();
        }
        pendiente_btn.id = LocalStorage
        li.appendChild(eliminar_btn);
        task.appendChild(li);
    });
}


