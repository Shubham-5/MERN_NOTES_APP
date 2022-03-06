import { FaPlusCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const AddNotes = ({ handlePost, setDesc, desc, edit, setEdit, handleEdit }) => {
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDesc(event.target.value);
    }
  };

  const handleIsOpen = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div
        className='addnote'
        style={{
          height: edit ? "300px" : "0px",
          transition: "0.4s ease-in-out all",
        }}>
        {edit && (
          <form method='POST' className='note new'>
            <textarea
              rows='8'
              cols='10'
              placeholder='Type to add a note...'
              value={desc}
              onChange={handleChange}></textarea>

            <div className='note-footer'>
              <small>{characterLimit - desc.length} Remaining</small>
              <button className='save' onClick={handlePost}>
                Create New
              </button>
              <button className='save' onClick={handleEdit}>
                Update
              </button>
            </div>
          </form>
        )}
      </div>
      <div className='icn-btn-div'>
        <div className='icn-bg'>
          {edit ? (
            <MdClose className='plus-circle' onClick={handleIsOpen} />
          ) : (
            <FaPlusCircle className='plus-circle' onClick={handleIsOpen} />
          )}
        </div>
      </div>
    </>
  );
};

export default AddNotes;
