
const app = new Vue({
    el: '#root',
    data: {
        EmailList: [];
    }
    methods{
        GetEmail: function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response){
                this.EmailList.push(response.data.response)

            });

        }
    }
})

