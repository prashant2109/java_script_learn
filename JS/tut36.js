console.log('This is tut36');

class Library{
    constructor(bookList){
        this.bookList = bookList
        this.issuedBook = {}
    }

    getBookList(){
        this.bookList.forEach(element =>{
            console.log(element);
        });
    }

    issueBook(bookname, user){
        if (this.issuedBook[bookname] == undefined){
            this.issuedBook[bookname] = user
        }
        else{
            console.log('This book is already issued');
        }
    }

    returnBook(bookname){
        delete this.issuedBook[bookname]
    }
}
