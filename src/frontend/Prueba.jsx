import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getConsultants } from './actions/mrwit';

function Users({ consultantData, getConsultants }) {
  useEffect(() => {
    getConsultants();
  }, []);
  console.log(consultantData.consultants);
  return consultantData.isLoading ? (
    <h2>Loading</h2>
  ) : consultantData.error ? (
    <h2>{consultantData.error}</h2>
  ) : (
    <div>
      <div className='row'>
        <div className='col-sm-12 btn btn-info'>
          Lely está probando los axios
        </div>
      </div>
      <div>
        {consultantData &&
          consultantData.consultants &&
          consultantData.consultants.map((consultant) => <p key={consultant._id}>{consultant._id}</p>)}
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    consultantData: state.mrwitReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsultants: () => dispatch(getConsultants()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
