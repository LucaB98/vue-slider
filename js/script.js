console.log('vue ok', Vue);

const {createApp} = Vue;

const app = createApp({
    data:() => ({
        pictures,
        currentIndex: 0
    }),
    computed:{
        isLastIndex(){
            return this.currentIndex === this.pictures.length - 1;
        },

        isFirstIndex(){
            return this.currentIndex === 0;
        }
    },
    
})


app.mount('#root');