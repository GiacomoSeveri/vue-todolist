console.log('vue ok', Vue)

const app = Vue.createApp({
    data(){
        return{
            tasks: [
                {
                    task: 'Fare la spesa',
                    done: 'folse'
                },
                {
                    task: 'Lavare la macchina',
                    done: 'folse'
                },
                {
                    task: 'Fare il ragù',
                    done: 'folse'
                },
                {
                    task: 'Mettere apposto le legne',
                    done: 'folse'
                },
            ]
        }
    },
    methods: {
        deed(){
            this.tasks.done = 'true';
        }
    }
});

app.mount('#root')