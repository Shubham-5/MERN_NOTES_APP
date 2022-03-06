import { MdDeleteForever, MdEditNote } from "react-icons/md";
const Notes = ({ posts, handleDeleteNote, setId, setEdit, edit }) => {
  const handleOpen = async (id) => {
    setEdit(!edit);

    setId(id);
  };
  return (
    <div className='cards'>
      {posts &&
        posts.map((post) => (
          <div className=' note' key={post._id}>
            <span>{post.desc}</span>
            <div className='note-footer'>
              <small>{post.createdAt}</small>
              <div>
                <MdEditNote
                  onClick={() => handleOpen(post._id)}
                  className='edit-icon'
                  size='1.3em'
                />
                <MdDeleteForever
                  onClick={() => handleDeleteNote(post._id)}
                  className='delete-icon'
                  size='1.3em'
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Notes;
