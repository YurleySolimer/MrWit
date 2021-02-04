import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Consultant.scss';

const Consultant = (props) => {

  const { consultants } = props;

  const data = consultants.filter((consultant) => {
    return consultant.id === props.match.params.id;
  });

  return (
    <div>
      <h1>{data[0].name}</h1>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    consultants: state.consultants,
  };
};

export default connect(mapDispatchToProps, null)(Consultant);
