import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/reducers/ToDo";
import ToDo from "../components/ToDo";
import "../style/index.css";

export interface RootState {
  toDos: { text: string; id: number };
}
function Home({ toDos, addToDo }: any) {
  const [text, setText] = useState("");
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo(text);
  }
  return (
    <>
      <h1>HOME</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} className="input" />
        <button className="btn">ADD</button>
      </form>
      <ul>
        {toDos.map((toDo: RootState["toDos"]) => {
          return <ToDo {...toDo} key={toDo.id} />;
        })}
      </ul>
    </>
  );
}

// mapStateToProps : redux state로 부터 home(Component)에 props로써 전달한다.
function mapStateToProps(state: any) {
  return { toDos: state.toDoState };
}

function mapDispatchToProps(dispatch: any) {
  return { addToDo: (text: any) => dispatch(actionCreators.addToDo(text)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
