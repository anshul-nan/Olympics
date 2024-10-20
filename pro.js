function search(){
    o=document.getElementById("input").value;
    p=o.toLowerCase();
    f=p.replace(/\s+/g,"-")
    link="https://olympics.com/en/athletes/"+f+"/";
    console.log(link)
   

    document.getElementById("result").innerHTML="<section id='result'> <iframe src='' id='if'></iframe></section>"
    document.getElementById("if").src=link;
}