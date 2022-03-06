import { useState, useEffect } from "react";
import AddNotes from "./components/AddNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  const [posts, setposts] = useState([]);
  const [desc, setDesc] = useState("");
  const [edit, setEdit] = useState(false);
  const [updateId, setId] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${process.env.REACT_APP_API}/api/notes`);
      const data = await res.json();
      setposts(data);
    }

    return getData();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_API}/api/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ desc }),
      });
      const res = await fetch(`${process.env.REACT_APP_API}/api/notes`);
      const data = await res.json();
      setposts(data);
      setEdit(!edit);
      setId("");
      setDesc("");
      alert("success");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API}/api/delete/` + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const res = await fetch(`${process.env.REACT_APP_API}/api/notes`);
      const data = await res.json();
      setposts(data);
      alert("success");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (desc) {
      try {
        await fetch(`${process.env.REACT_APP_API}/api/notes/` + updateId, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ desc }),
        });
        const res = await fetch(`${process.env.REACT_APP_API}/api/notes`);
        const data = await res.json();
        setposts(data);
        setEdit(!edit);
        setDesc("");
        setId("");
        alert("success");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Header />
      <AddNotes
        handlePost={handlePost}
        desc={desc}
        setDesc={setDesc}
        edit={edit}
        setEdit={setEdit}
        handleEdit={handleEdit}
      />
      <Notes
        posts={posts}
        edit={edit}
        setEdit={setEdit}
        handleDeleteNote={handleDeleteNote}
        handleEdit={handleEdit}
        setId={setId}
      />
    </div>
  );
}

export default App;
