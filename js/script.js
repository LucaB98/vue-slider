console.log('vue ok', Vue);

const {createApp} = Vue;

const app = createApp({
    data:() => ({
        pictures,
        currentIndex: 0
    })
})


app.mount('#root');