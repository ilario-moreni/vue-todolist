const { createApp } = Vue;

createApp({
    data(){
        return{
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
    }
}).mount('#app')