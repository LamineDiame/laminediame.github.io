function displayNewBook() {
    let oneDown = myLibrary.pop();

    for (let i = 0; i < 1  ;i++){
        
        let bookContainerDiv = document.getElementById('bookContainer');
        let innerdiv = document.createElement('div');
        let innerp2 = document.createElement('p');
        bookContainerDiv.appendChild(innerdiv);
        innerdiv.appendChild(innerp2)
        twoDown = oneDown.title + ', ' +oneDown.author + ', ' +oneDown.pages + ', ' +oneDown.status;
        innerp2.innerHTML = twoDown;
               // innerp.innerHTML = document.forms["form1"].title.value +', ' +document.forms["form1"].author.value+', '+document.forms["form1"].nbrpages.value + ', ' +document.forms["form1"].status.value 
    //    innerp.innerHTML = myLibrary[myLibrary.length - 1];
     //   console.log( myLibrary[myLibrary.length - 1])
        
        // selectTitle + ', ' + selectAuthor+ ', ' +  selectPages + ', ' +  selectStatus;
    
         // bookContainerDiv.textContent = phrase;
  }
  }
  //////////////////////////////////////////////////////////////////////////

  


function displayBook() {
    let bookContainerDiv = document.getElementById('bookContainer');
    bookContainerDiv.innerHTML = "";

    for (let i = 0; i < myLibrary.length  ;i++){

        let selectTitle = myLibrary[i].title;
        let selectAuthor = myLibrary[i].author;
        let selectPages = myLibrary[i].pages;
        let selectStatus = myLibrary[i].status;
    
        let innerdiv = document.createElement('div');
        let innerp = document.createElement('p');
        bookContainerDiv.appendChild(innerdiv);
        innerdiv.appendChild(innerp);
        let results = selectTitle + ', ' + selectAuthor+ ', ' +  selectPages + ', ' +  selectStatus;
        innerp.textContent =  results;
               // innerp.innerHTML = document.forms["form1"].title.value +', ' +document.forms["form1"].author.value+', '+document.forms["form1"].nbrpages.value + ', ' +document.forms["form1"].status.value 
    //    innerp.innerHTML = myLibrary[myLibrary.length - 1];
     //   console.log( myLibrary[myLibrary.length - 1])
        
        // selectTitle + ', ' + selectAuthor+ ', ' +  selectPages + ', ' +  selectStatus;
    
         // bookContainerDiv.textContent = phrase;
  }
  }
//////////////////////////////////////////////////////////////////////////
//essaies de simplement faire apparraitre une simple phrase avec la dom dans la boucle, puis 4 et ensuite essaies de leur assigner les valeurs de titre etc

function render() {
  document.getElementById('bookContainer').innerHTML = "";
  myLibrary.forEach((book) => {
    const htmlBook = `
      <tr>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.pages}</td>
              <td>${book.status}</td>
      </tr> <br>
      `;
      document.getElementById('bookContainer').insertAdjacentHTML("afterbegin", htmlBook);
      console.log(myLibrary)
  });
}



//////////////////////////////////////////////////////////////////////////


  https://www.w3resource.com/javascript-exercises/javascript-array-exercise-13.php