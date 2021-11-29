import React from "react";
import { connect } from "react-redux";
import { RootState } from "../routes/Home";
import { actionCreators } from "../store/reducers/ToDo";
function Detail({ toDo, deleteToDo }: any) {
  return (
    <>
      <div>Detail</div>
      <h1>할일 {JSON.stringify(toDo)}</h1>
      <button onClick={deleteToDo}>❌</button>
    </>
  );
}

function mapStateToProps(state: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    toDo: state.toDoState.find((s: RootState["toDos"]) => s.id === Number(id)),
  };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  const actionId = Number(id);
  return { deleteToDo: () => dispatch(actionCreators.deleteToDo(actionId)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
