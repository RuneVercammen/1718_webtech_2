var books = [
    {title: "Harry Potter",
    author: "J.K. Rowling",
    alreadyRead: false
    },
    {title: "Jane Eyre",
    author: "Charlotte Brontë",
    alreadyRead: true
    },
    {title: "De verschrikkelijke schoolmeester",
    author: "Dolf Verroen",
    alreadyRead: true
    }
    ];
    for(i=0; i<books.length;i++) {
        if (books[i].alreadyRead == true) {
            console.log("Je las reeds het boek " + books[i].title + " door " + books[i].author)
        }
        else{
            console.log("Je moet het boek " + books[i].title + " door " + books[i].author + "nog lezen" ) }
    }