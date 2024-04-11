 //Variables initialization//


        const readingList = Array.from(document.querySelectorAll('ul input'));
        const pToDelete = document.querySelector('.tempText');
        const addButton = document.querySelector('#addToLib');
        const library=document.querySelector(".library");
        let checkedValue=null;


 //Array for storing books//
        const myLibrary = [];


 //constructor for books//
        function Book(name,author,pages){
            this.name = name;
            this.author = author;
            this.pages= pages;
            this.readingStatus = function(){
                for (let i = 0; i < readingList.length; i++) {
                    if (readingList[i].checked) {
                        console.log(readingList[i].value);
                        return readingList[i].value;
                    }
            }
        }
    }

  //function to create new books//
        function createBook(bookName,bookAuthor,numberOfPages){
            const book = new Book(bookName,bookAuthor,numberOfPages);
            myLibrary.push(book);
            return book;
        }



//function to create cards of books in the page//
        function createDivWithP(className,content){
            let div = document.createElement('div');
            div.className = className;

            let p =document.createElement('p');
            p.textContent=className+content;
            div.appendChild(p);


            return div;
        }

 //function for creating library cards//

        function createCard(book){

            //Create main div for book cards//
                let newBookCard = document.createElement('div');
                newBookCard.className = 'bookCard' ;  

            //Create child div for main div//
                let bookName = createDivWithP('bookName',book.name);
                let bookAuthor = createDivWithP('bookAuthor',book.author);
                let bookPage = createDivWithP('bookPage',book.pages);
                let state = book.readingStatus();
                console.log(state);
                let bookStatus = createDivWithP('bookStatus',state);
            
                 const deleteButton =document.createElement('button');
                 deleteButton.textContent="Delete"
                 deleteButton.addEventListener('click',()=>{
                    newBookCard.remove();
                });
                 

            //Appending child div to main div//
                
                 newBookCard.appendChild(bookName);
                 newBookCard.appendChild(bookAuthor);
                 newBookCard.appendChild(bookPage);
                 newBookCard.appendChild(deleteButton);
                 newBookCard.appendChild(bookStatus);

            //Appending main div to body of html//
              
                library.appendChild(newBookCard);                   
        }
        



//adding event listener to add to library button//

        addButton.addEventListener('click',()=>{
            if(pToDelete){
                pToDelete.remove();
            }
            const booktitle=document.querySelector('.name>input').value;
            const author= document.querySelector(".author>input").value;
            const numberOfPages= document.querySelector(".pages>input").value;
            const book = createBook(booktitle,author,numberOfPages)
            createCard(book);
            console.log(myLibrary);

        })



//adding event listener for delete button//

      