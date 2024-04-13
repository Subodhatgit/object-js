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
        const close2 =document.querySelector(".closedialog");
        


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

                    close.addEventListener("click", () => {
                        if (checkPage()) {
                            addNewBook();
                            createTable();
                            dialog.close();
                        }
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
                            const newDiv=document.createElement("div");
                            const p=document.createElement("p")
                            const newButton=document.querySelector("#mybutton");
                            let newButton2=newButton.cloneNode(true);
                            
                            p.textContent=myLibrary[i].readingStatus();

                            const array=['Read','Reading','Plan to Read'];
                            newButton2.addEventListener("click",()=>{
                                let position=array.indexOf(p.textContent);
                                position++;
                                if(position==3){
                                    position=0;
                                }
                                p.textContent=array[position];
                            })
                            newButton2.className="newone";
                            newDiv.appendChild(p);
                            newDiv.appendChild(newButton2);
                            readTD.appendChild(newDiv); 
                            newDiv.style.display="flex"
                            newDiv.style.justifyContent="center"
                            newDiv.style.alignItems="center";
                            newDiv.style.gap="5px"
                            newTR.appendChild(readTD);
                            


                            const deleteBook = document.createElement('td');
                            const deleteButton = document.createElement("button");

                            deleteButton.className = "delete";
                            const svg1 = document.querySelector("#mySVG");
                            let svg2=svg1.cloneNode(true);
                            deleteButton.appendChild(svg2);
                            deleteBook.style.display="flex";
                            deleteBook.style.justifyContent="center";
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
 //function for checking if page number is correct//
                            function checkPage() {
                                const numberOfPages1 = document.querySelector(".pages>input").value;
                                const booktitle = document.querySelector('.name>input').value;
                                const author = document.querySelector(".author>input").value;

                                if (isNaN(numberOfPages1)) {
                                    alert("Give a number for pages");
                                    return false;
                                }

                                if (booktitle == "" && author == "") {
                                    alert("At least give a book name or author's name plz");
                                    return false;
                                }

                                // If everything is valid, return true
                                return true;
                            }                                                  
//event listener for closing dialog//
                close2.addEventListener("click",()=>{
                    dialog.close();
                    checkIfEmpty();
                });                        