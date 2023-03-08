function addGrid(){
    var columns =prompt("Enter no of Column :");
    var rows =prompt("Enter No of Row :"); 

    var gridBox = document.createElement('div');
    gridBox.className = 'gridBox';
    for (var i = 1; i <= columns; i++) {
        var column = document.createElement('div'); 
        column.className = 'column';

        for (var j = 1; j <= rows; j++) {
            var row = document.createElement('div'); 
            row.className = 'row';
            column.appendChild(row); 
        }
        gridBox.appendChild(column); 

    }
    document.body.appendChild(gridBox);
    addColor();
 }

function addColor(){
    let  colorInput = document.querySelector("#color");
    let gridElements = document.querySelectorAll('.gridBox .column .row');
    colorInput.addEventListener('input' , () =>{
        let color = colorInput.value;
        gridElements.forEach(div =>{
        div.addEventListener('mouseover', () =>{
            console.log("color");
            // div.value = color;
            div.style.backgroundColor = color;
        })
    })
})
}                   

function colorEraser(){
    let gridElements = document.querySelectorAll('.gridBox .column .row');
    gridElements.forEach(div =>{
        div.addEventListener('mouseover', () =>{
            console.log("colorWhite");
            div.style.backgroundColor = "white";
        })
    })
}