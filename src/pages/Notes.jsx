import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from 'react-icons/md'
import { Link } from "react-router-dom";

import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Мои записи</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {setText(e.target.value);
            handleSearch();}}
            autoFocus
            placeholder="Найти..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <AiOutlineSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && 
        <p className="empty__notes">
          <img src="../img/NotFound.png" alt="smile" />
          <br />
          Нет записей
        </p>}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        {" "}
        <BsPlusLg />{" "}
      </Link>
    </section>
  );
};

export default Notes;
