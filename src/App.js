import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App(){
    const [books,setBooks]=useState([]);


    const createBook=(title)=>{
            const updatedBooks=[
                ...books,{id:Math.round(Math.random()*1000),title}
            ]
setBooks(updatedBooks);
    };
    const deleteBookById=(id)=>{
        const updatedBooks=books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updatedBooks);
    }

    const editBookByiD=(id,newTitle)=>{
        const updatedBooks=books.map((book)=>{
            if(book.id===id){
                return{...book,title:newTitle}
            }else{
                return book;
            }
        })
        setBooks(updatedBooks);
    }


    return <div className="app">BOOK LIST
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookByiD}></BookList>
        <BookCreate onCreate={createBook}></BookCreate>
       
    </div>;
}
export default App;