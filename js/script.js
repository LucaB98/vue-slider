console.log('vue ok', Vue);

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            pictures,
            currentIndex: 0
        }
    }
});


app.mount('#root');