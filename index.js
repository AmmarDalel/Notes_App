let notestab=[] ;
let colortmp='' ;
let tabindicesdelete=[] ;
let storednotes = localStorage.getItem('notestab');
if (storednotes && storednotes.trim() !== '') {
    try {
        notestab = JSON.parse(storednotes);
        if(notestab!=0)document.getElementById('deletediv').innerHTML="<button id='deleteAll' onClick='deleteAll()'>Delete All (" + notestab.length + ")</button>";
        afficher() ;
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

// afficher et cacher les couleurs choisis
let colors=document.getElementById('colors') ;

let show=false ;

function showcolors(){
    if(show==false){
        colors.style.display='flex' ;
        show=true ;
    }
    else{
        colors.style.display='none' ;
        show=false ;
    }

}




//write notes 
function writenote(i , element){
   notestab[i].content=element.value ;
   localStorage.setItem('notestab', JSON.stringify(notestab)) ;


}

//add notes card
let notescontent=document.getElementById('notescontent') ;
function AddCard(color){
   
    if(notestab.length==0)document.getElementById('deletediv').innerHTML="<button id='deleteAll' onClick='deleteAll()'>Delete All (" + notestab.length + ")</button>";

    let note ={
        content:'' ,
        color:color,
    }
    
    notestab.push(note) ;
    localStorage.setItem('notestab', JSON.stringify(notestab)) ;

    afficher() ;

}

//afficher
function afficher(){
    let notescontent = document.createElement('div');
    notescontent.className='notescontent' ;
    notescontent.id='notescontent' ;

    for(let i=notestab.length-1 ; i>=0 ; i--){
        document.getElementById('deletediv').innerHTML="<button id='deleteAll' onClick='deleteAll()'>Delete All (" + notestab.length + ")</button>";
        let div = document.createElement('div');
        div.classList.add('card', 'divcard');
        div.style.backgroundColor = notestab[i].color;

        let textarea = document.createElement('textarea');
        textarea.type = 'text';
        textarea.className = 'card';
        textarea.onkeyup = function() {
            writenote(i , this);
        };
        textarea.placeholder = '';
        textarea.rows = 15;
        textarea.cols = 30;
        textarea.style.background=notestab[i].color ;
        textarea.value=notestab[i].content ;
        // Créer l'image
        let img = document.createElement('img');
        img.src = './images/close.png';
        img.alt = 'close';
        img.classList.add('closeicon');
        img.onclick=function(){
            deleteData(i)  ;
        };

        // Ajouter le textarea et l'image à la div principale
        div.appendChild(textarea);
        div.appendChild(img);       
        notescontent.appendChild(div) ;

    }
    let existingNotesContent = document.getElementById('notescontent');
    if (existingNotesContent) {
        existingNotesContent.parentNode.removeChild(existingNotesContent);
    }
    document.getElementById('notes').appendChild(notescontent) ;

    
   
    
}




// delete
function deleteData(i){
    notestab.splice(i,1) ; // supprimer de l'index i 1 élément 
    localStorage.setItem('notestab', JSON.stringify(notestab)) ;
    if(notestab.length==0) document.getElementById('deletediv').innerHTML="";
    afficher();

}

//delete All
function deleteAll(){
    if(!searchtmp){
        console.log(searchtmp) ;
        notestab=[] ;
        localStorage.removeItem('notestab') ;
        afficher();
        document.getElementById('deletediv').innerHTML="";
    }
    else{
        console.log(searchtmp) ;
        for(let j=0 ;j<tabindicesdelete.length ; j++){
            notestab.splice(tabindicesdelete[j],1) ;
            console.log(notestab) ;
            localStorage.setItem('notestab', JSON.stringify(notestab)) ;
            afficher();
            if(notestab.length==0)document.getElementById('deletediv').innerHTML="";
        }
        searchtmp=false ;
    }

  
  

}


//search
let searchtmp=false ;
let inputsearch=document.getElementById('search') ;
function search(value){
    tabindicesdelete=[];
    let count=0 ;
    searchtmp=true ;
    let notescontent = document.createElement('div');
    notescontent.className='notescontent' ;
    notescontent.id='notescontent' ;
    for(let i=notestab.length-1 ; i>=0 ; i--){
        if(notestab[i].content.includes(value.toLowerCase())){
            tabindicesdelete.push(i);
            count++ ;
            document.getElementById('deletediv').innerHTML="<button id='deleteAll' onClick='deleteAll()'>Delete All (" + count + ")</button>";
            let div = document.createElement('div');
            div.classList.add('card', 'divcard');
            div.style.backgroundColor = notestab[i].color;
    
            let textarea = document.createElement('textarea');
            textarea.type = 'text';
            textarea.className = 'card';
            textarea.onkeyup = function() {
                writenote(i , this);
            };
            textarea.placeholder = '';
            textarea.rows = 15;
            textarea.cols = 30;
            textarea.style.background=notestab[i].color ;
            textarea.value=notestab[i].content ;
            // Créer l'image
            let img = document.createElement('img');
            img.src = './images/close.png';
            img.alt = 'close';
            img.classList.add('closeicon');
            img.onclick=function(){
                deleteData(i)  ;
            };
    
            // Ajouter le textarea et l'image à la div principale
            div.appendChild(textarea);
            div.appendChild(img);       
            notescontent.appendChild(div) ;
            console.log(notescontent) ;
        }
        else if (count==0)document.getElementById('deletediv').innerHTML="<button id='deleteAll' onClick='deleteAll()'>Delete All (" + count + ")</button>";

    }
    let existingNotesContent = document.getElementById('notescontent');
    if (existingNotesContent) {
        existingNotesContent.parentNode.removeChild(existingNotesContent);
    }
    document.getElementById('notes').appendChild(notescontent) ;
}

function clearinputs(){
    let inputsearch=document.getElementById('search') ;
    inputsearch.value='';
    afficher() ;
}


