nos_array=[];
function submit()
{
    var display_student_array = [] ;
    for (var j = 1 ; j <= 4; j++)
    {
        var nos=document.getElementById("name_of_the_student_"+j).value;
       console.log(nos);
       nos_array.push(nos);
    }
    console.log(nos_array);
    var length = nos_array.length;
    console.log(length);
    
    for(var k=0; k<length; k++)
    {
        display_student_array.push("<h4>NAME - "+ nos_array[k] + "</h4>");
        console.log(display_student_array);     
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = remove_commas;
    
    var remove_commas = display_student_array.join(" ");
     console.log(remove_commas);
      document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block";
}
    
function sorting()
{
    nos_array.sort();
    console.log(nos_array);
    var display_student_array_sorting = [];
    var length = nos_array.length;
    console.log(length);
    for(var k=0; k<length; k++)
    {
        display_student_array_sorting.push("<h4>NAME - "+ nos_array[k] + "</h4>");
        console.log(display_student_array_sorting);     
    }
    var remove_commas = display_student_array_sorting.join(" ");
     console.log(remove_commas);
      document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}