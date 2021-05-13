import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {fetchSpecies} from '../src/actions';

const Species = (props) => {
    const {species, isFetching, error, dispatch} = props;

    useEffect(()=> {
        dispatch(fetchSpecies());
    }, []);

    const handleClick = () => {
        dispatch(fetchSpecies());
      }
    
      if (error) {
        return <h2>oops error :/ {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching aliens...</h2>;
      }
    
      return (
        <>
          <div>
            <h2> {}'s are cool! </h2>
      
          </div>
          <button onClick={(e)=>{ handleClick() }}>More aliens</button>
        </>
      );
};

const mapStateToProps = state => {
    return {
      species: state.species,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps)(Species);