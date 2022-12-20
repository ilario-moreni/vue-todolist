const { createApp } = Vue;

createApp({
    data(){
        return{
            newTaskText: '',
            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Lavare i piatti',
                    done: true
                },
                {
                    text: 'Portare a passeggio il cane',
                    done: true
                },
                {
                    text: 'Organizzare capodanno',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(index){
            this.todoList.splice(index,1)
        },
        addTask(){
            let newTask = {
                text: this.newTaskText,
                done: false
            }
            this.todoList.push(newTask);
            this.newTaskText = '';
        },
        changeState(index){
            let currentState = this.todoList[index]
            if(currentState.done){
                currentState.done = false;
            } else{
                currentState.done = true;
            }
        }
    },
}).mount('#app')