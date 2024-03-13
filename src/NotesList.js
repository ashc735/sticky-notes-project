import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);
  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      onDelete={props.onDelete}
      note={note}
      key={note.id}
    />
  );
  const notesElement = searchMatches.map(renderNote);
  return <ul className="notes-list">{notesElement}</ul>;
};

export default NotesList;
