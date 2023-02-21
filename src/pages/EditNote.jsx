import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id); // в случае ошибки кода заменить "==" на "==="
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          // в случае ошибки кода заменить "==" на "==="
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }
    // Обновлённая запись на Home Page
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Вы уверены, что хотите удалить заметку?")) {
      const newNotes = notes.filter((item) => item.id !== id);

      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          {" "}
          <IoIosArrowBack />{" "}
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Готово
        </button>
        <button className="btn danger" onClick={handleDelete}>
          {" "}
          <RiDeleteBin6Line />{" "}
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Купить хлеб..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
