<?php 


$json_string = file_get_contents('tasks.json');

$tasks = json_decode($json_string, true);

if(isset($_POST['ToDoTask'])){
  $new_task = [
    "text" => $_POST['ToDoTask'],
    "done" => false
  ];
  $tasks[] = $new_task;
  filePut($tasks);
}

function filePut($tasks){
  file_put_contents('tasks.json', json_encode($tasks));
};

header("Content-Type: application/json");
echo json_encode($tasks)

?>