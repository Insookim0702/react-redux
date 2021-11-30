import React from "react";
import { connect } from "react-redux";
import { RootState } from "../routes/Home";
// import { actionCreators } from "../store/reducers/ToDo";
import { actionCreators } from "../store/reducers/ToDoTookit";
import { Link } from "react-router-dom";
function ToDo(toDo: any) {
  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    toDo.deleteToDo();
  }
  return (
    <li>
      <Link to={`/${toDo.id}`}>
        {toDo.text}
        <button onClick={handleDelete}>❌</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispath: any, ownProps: RootState["toDos"]) {
  return { deleteToDo: () => dispath(actionCreators.deleteToDo(ownProps.id)) };
}
export default connect(null, mapDispatchToProps)(ToDo);
