let myLibrary = [
    new Book ("Games Of Thrones ","George R. R. Martin","1000","Lu"),
    new Book  ("Harry Potter","J. K. Rowling","750","Lu"),
    new Book ("Percy Jackson","Rick Riordan","500","Non Lu")
];

displayBooks();
let newBook;
   
function Book(title,author,pages,status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const book1 = new Book();

function addBookToLibrary()
{
    newBook = new Book(
     document.getElementById("title").value,
     document.getElementById("author").value,
     document.getElementById("nbrpages").value,
     document.getElementById("status").value
    );
     myLibrary.push(newBook);             
}

function displayBooks()
{   
     document.getElementById('bookContainer').innerHTML = "";

        for(let i = 0; i < myLibrary.length; i++)
        {
            if(myLibrary[i].status == 'Lu')
            {   
                var row = '<div class="bookCard">'+
                '<div class="innerCard">' +'TITRE : ' + myLibrary[i].title + '</div>'+
                '<div class="innerCard">' +'AUTEUR : '+ myLibrary[i].author + '</div>'+
                '<div class="innerCard">' +'NOMBRE DE PAGES : '+ myLibrary[i].pages+ '</div>'+
                'STATUT : ' + '<button data-color class="statusCard cardStatusLu" id="cardStatus'+i+'"data-set=status'+i+'" onclick="changeStatus('+i+')">'+myLibrary[i].status+'</button> <br>'  
                +'<input type="button" class="closeButton" value="&times" onclick="deleteBook('+i+'), displayBooks()"></input> <br>'
                +'</div>' 
                document.getElementById('bookContainer').insertAdjacentHTML("afterbegin", row) ;
                ;
            }
            else if(myLibrary[i].status == 'Non Lu')
            {
                var row = '<div class="bookCard">'+
                '<div class="innerCard">' +'TITRE : ' + myLibrary[i].title + '</div>'+
                '<div class="innerCard">' +'AUTEUR : '+ myLibrary[i].author + '</div>'+
                '<div class="innerCard">' +'NOMBRE DE PAGES : '+ myLibrary[i].pages+ '</div>'+
                'STATUT : ' + '<button data-color class="statusCard cardStatusNonLu" id="cardStatus'+i+'"data-set=status'+i+'" onclick="changeStatus('+i+')">'+myLibrary[i].status+'</button> <br>'  
                +'<input type="button" class="closeButton" value="&times" onclick="deleteBook('+i+'), displayBooks()"></input> <br>'
                +'</div>' 
                document.getElementById('bookContainer').insertAdjacentHTML("afterbegin", row) ;
                
            }
        }
    }
 
function deleteBook(element)
{
    myLibrary.splice(element,1);          
}

function changeStatus(element)
{
    let datastatus = document.getElementById('cardStatus'+element);

    if(datastatus.textContent == 'Lu')
    {
        datastatus.textContent='Non Lu';
         document.getElementById('cardStatus'+element).classList.add('cardStatusNonLu')
         document.getElementById('cardStatus'+element).classList.remove('cardStatusLu');       
    }
    else if (datastatus.textContent == 'Non Lu')
    {
        datastatus.textContent = 'Lu';
         document.getElementById('cardStatus'+element).classList.add('cardStatusLu');
         document.getElementById('cardStatus'+element).classList.remove('cardStatusNonLu');  
    }
}
               
function displayForm()
{
    document.getElementById("overlay").classList.add('active')
    document.getElementById("form").classList.add('active'); 
}

function hideForm()
{
document.getElementById("form").classList.remove('active');
document.getElementById("overlay").classList.remove('active')
}