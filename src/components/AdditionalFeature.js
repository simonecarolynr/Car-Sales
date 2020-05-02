import React from 'react';
import { addFeature } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {



  return (
    <li>
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const  mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
