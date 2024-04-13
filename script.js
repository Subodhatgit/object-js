 //Variables initialization//
        const add = document.querySelector(".add");
        const close = document.querySelector(".close")
        const dialog = document.querySelector(".mainThing")
        const readingList = Array.from(document.querySelectorAll('ul input'));
        const pToDelete = document.querySelector('.tempText');
        const addButton = document.querySelector('#addToLib');
        const library=document.querySelector(".library");
        const tableOfBooks = document.querySelector("table");
        let checkedValue=null;
        let display=0;

        


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



//adding event listener to add to library button//

        addButton.addEventListener('click',()=>{
            if(pToDelete){
                pToDelete.remove();
            }

            dialog.showModal();
            
            
        })



//adding event listener for closing dialog and adding book to array //

            close.addEventListener("click",()=>{
                
                addNewBook();
                createTable();
                
                
                console.log(myLibrary);
                dialog.close();
                
           

            });

//function for pushing a new book to array//
            function addNewBook(){

                const booktitle=document.querySelector('.name>input').value;
                const author= document.querySelector(".author>input").value;
                const numberOfPages= document.querySelector(".pages>input").value;
                
                const newBook = new Book(booktitle,author,numberOfPages)    ;
                myLibrary.push(newBook);
                checkIfEmpty();
                
            }               

//function for creating table from array//
                function createTable() {
                    const check = document.querySelectorAll(".temporary");
                        if(check) {
                            check.forEach(function(check1) {
                                check1.remove();
                            });
                        }
                    if(myLibrary.length != 0) {
                        
                        for(let i = 0; i < myLibrary.length; i++) {
                            let index = i; // Create a new block scope
                            const newTR = document.createElement('tr');
                            newTR.className = "temporary";

                            const nameTD = document.createElement('td');
                            nameTD.textContent = myLibrary[i].name;
                            newTR.appendChild(nameTD);

                            const authorTD = document.createElement('td');
                            authorTD.textContent = myLibrary[i].author;
                            newTR.appendChild(authorTD);

                            const pagesTD = document.createElement('td');
                            pagesTD.textContent = myLibrary[i].pages;
                            newTR.appendChild(pagesTD);

                            const readTD=document.createElement('td');
                            readTD.textContent=myLibrary[i].readingStatus();
                            newTR.appendChild(readTD);

                            const deleteBook = document.createElement('td');
                            const deleteButton = document.createElement("button");

                            deleteButton.className = "delete";
                            deleteButton.textContent = "Remove from Library";
                            deleteBook.appendChild(deleteButton);
                            newTR.appendChild(deleteBook);

                            tableOfBooks.appendChild(newTR);

                            deleteButton.addEventListener("click", () => {
                                const checkTheIndex=myLibrary.indexOf(myLibrary[i]);
                                myLibrary.splice(checkTheIndex, 1); // Use the block scoped variable
                                createTable();
                                checkIfEmpty();
                            });
                        }
                    }
                }

                    
//function for checking if array is empty//
                    function checkIfEmpty(){
                        
                            if(myLibrary.length!=0){
                                tableOfBooks.style.display="block";
                                pToDelete.remove();
                            }else{
                                tableOfBooks.style.display="none";
                                library.insertBefore(pToDelete,library.firstChild); 
                            }
                        }
                            