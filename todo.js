var task=[],btn1,btn2,check,field,count=0,i,removedData,buttonValue;

$(document).ready(function(){
$("#addTask").click(function(){
    task[count] = $('#newTask').val();
    check = (`<input type="checkbox" id="ch${count}" onclick="completedTask(this.id)"> `)
    field = (` <input type="text" id="editData${count}" value=${task[count]} readonly style=border:none;outline:none> `)
    btn1 = (` <button id="edit${count}" onclick="editValue(this.id)" value="edit" >Edit</button> `)
    btn2 =(` <button id="delete${count}" onclick="deleteValue(this.id)" >Delete</button> <br> `)
    console.log(task)
    $('.toDoList').append(`<li id="list${count}">`+check+field+btn1+btn2+"</li>");
    count += 1;
    $("#newTask").val('');
 

    // $(onclick).click(function()
    //     console.log("task");
    //     $('input').val(this);

});
});

function editValue(val1){
    console.log(val1);
    buttonValue = $("#"+val1).text();
    console.log('Button Value : '+buttonValue)

    i = val1.slice(-1);

    if(buttonValue == "Edit"){
        $("#editData"+i).removeAttr("readonly").removeAttr("style");
        $("#edit"+i).text("Save");

    }
    else{
        $("#editData"+i).attr("readonly",true).attr("style",true);
        task[i] = $("#editData"+i).val();
        console.log(" Change Value : "+task[i])
        $("#edit"+i).text("Edit");
    }


}

function deleteValue(del) {
    i = del.slice(-1);
    $("#list"+i).remove();

}

function completedTask(key) {
    console.log(key)
    i = key.slice(-1);

    if($("#ch"+i).is(":checked")){
        removedData = $("#list"+i).remove();
        removedData.appendTo('.completedTaskList')
    }
    else{
        removedData = $("#list"+i).remove();
        removedData.appendTo('.toDoList')
    }


}
// if($(this).is(":checked"))