
const app = new Vue({


    el: '#root',
    data: {
        EmailList: []
    },


    methods: {
        GetEmail: function(){
            for(i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                this.EmailList.push(response.data.response)
            });
            }

        }
    }
})

