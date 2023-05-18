

const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks : [

        {
          text : 'fare la spesa',
          done : false
        },

        {
          text : "bagnare l'orto",
          done : false
        },

        {
          text : 'giocare a nascondino con i camaleonti',
          done : false
        },
      ],
      errorMsg : '',
      newTaskText : ''
    }
  },

  methods : {
    deleteTask(index){
      errorMsg = ''
      if(this.tasks[index].done){
        this.tasks.splice(index, 1)
      }else{
        this.errorMsg = 'Attenzione per cancellare la task assicurati di averla completata!'
      }
    },

    addTask(){
      if(this.newTaskText.length > 4){
        const newTask = {
          text : this.newTaskText,
          done : false,
        }
        this.tasks.unshift(newTask)
      }else {
        this.errorMsg = 'Il testo deve contenere almeno 5 caratteri'
      }
      this.newTaskText = ''
    }
  }
}).mount('#app')