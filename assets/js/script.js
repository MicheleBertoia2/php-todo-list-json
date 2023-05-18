

const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks : [],
      errorMsg : '',
      newTaskText : '',
      apiUrl: "server.php",
    }
  },

  methods : {
    deleteTask(index){
      errorMsg = ''
      if(this.tasks[index].done){
        // this.tasks.splice(index, 1)

        const data = new FormData();
        data.append('indexToDelete', index);

        axios.post(this.apiUrl, data)
          .then(result => {
            this.tasks = result.data
          })

      }else{
        this.errorMsg = 'Attenzione per cancellare la task assicurati di averla completata!';
        setInterval(this.clearMsg,3000);
      }
    },
    clearMsg(){
      this.errorMsg = "";       
    },
    
    addTask(){
      if(this.newTaskText.length > 4){

        const data = new FormData();
        data.append('ToDoTask', this.newTaskText)

        axios.post(this.apiUrl, data)
          .then(result =>{
            this.newTaskText = '';
            this.tasks = result.data;
          })

        // const newTask = {
        //   text : this.newTaskText,
        //   done : false,
        // }
        // this.tasks.unshift(newTask)
      }else {
        this.errorMsg = 'Il testo deve contenere almeno 5 caratteri'
      }
    },
    readTasks(){
      axios.get(this.apiUrl)
        .then(result =>{
          this.tasks = result.data;
        })
    }
  },

  mounted(){
    this.readTasks()
  }

}).mount('#app')