console.log('vue ok', Vue);

const {createApp} = Vue;

const app = createApp({
    data:() => ({
        pictures,
        currentIndex: 0,
        autoplay: null,
    }),
    computed:{
        lastElementIndex(){
            return this.pictures.length - 1
        },
        isLastIndex(){
            return this.currentIndex === this.pictures.length - 1;
        },

        isFirstIndex(){
            return this.currentIndex === 0;
        }
    },
    methods:{
      
        setCurrentIndex(target){
            if(target === 'next'){
                if(this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            }else if(target === 'prev'){
                if(this.isFirstIndex)this.currentIndex = this.lastElementIndex;
                else this.currentIndex--
            }else{
                this.currentIndex = target;
            }
        },
        stopAutoPlay(){
            clearInterval(this.autoplay)
        },
        startAutoPlay(){
            this.autoplay = setInterval(() => {
                this.setCurrentIndex('next')
            },3000);
        }

    },
    mounted(){
        this.startAutoPlay(); 
    }
})


app.mount('#root');