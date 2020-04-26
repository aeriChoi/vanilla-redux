import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h3>No. {toDo?.id}</h3>
      <h1>{toDo?.text}</h1>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: {id}
    }
  } = ownProps;
  console.log(id);
  console.log(state);
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);