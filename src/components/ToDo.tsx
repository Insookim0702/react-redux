import React from "react";
import { connect } from "react-redux";
import { RootState } from "../routes/Home";
import { actionCreators } from "../store/reducers/ToDo";
function ToDo(toDo: any) {
  return (
    <li>
      {toDo.text}
      <button onClick={toDo.deleteToDo}>❌</button>
    </li>
  );
}

function mapDispatchToProps(dispath: any, ownProps: RootState["toDos"]) {
  console.log("ownProps", ownProps);
  return { deleteToDo: () => dispath(actionCreators.deleteToDo(ownProps.id)) };
}
export default connect(null, mapDispatchToProps)(ToDo);
