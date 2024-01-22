console.log('vue ok', Vue);

const {createApp} = Vue

const app = createApp({
    data(){
        return{
            destinations : destinations
        }
    }
});


app.mount('#root');