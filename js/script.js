// console.log('vue ok', Vue)

const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                {
                    name: 'Fare la spesa',
                    done: false
                },
                {
                    name: 'Lavare la macchina',
                    done: false
                },
                {
                    name: 'Fare il ragù',
                    done: false
                },
                {
                    name: 'Mettere apposto le legne',
                    done: false
                },
            ]
        }
    },
    methods: {
        addTask(){
            this.newTask = {task: this.newTask, done: false};
            this.tasks.push(this.newTask);
        },
        deed(currentIndex){
            if(this.tasks[currentIndex].done === false) {
                this.tasks[currentIndex].done = true;
            } else if(this.tasks[currentIndex].done = true) {
                this.tasks[currentIndex].done = false;
            }
        },
        deleteTask(currentIndex){
            this.tasks.splice(currentIndex, 1);
        }
    }
});

app.mount('#root');