import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const baseUrl = 'http://localhost:8004/api/notes';
  const getNotes = async () => {
    try {
      const resp = await axios.get(baseUrl);
      // console.log(resp.data.notes);
      setNotes(resp.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className='card flex align-items-center  justify-content-center '>
      <h1>Note App V1</h1> {notes.length}
    </div>
  );
}
