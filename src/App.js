import React, { useEffect, useState, } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import DraftJS from './DraftJS';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    background: '#FEA900',
    minHeight: '100px', 
    color: 'white',
    fontSize: 50, 
  },

  slide_1: {
    background: 'green',
  },
  slide_2: {
    background: 'red',
  },
  slide_3: {
    background: 'blue',
  },
}

const MyComponent = () => {
  const size = 4;
  const [myList, setList] = useState(null);

  useEffect(() => {
    const temp = [];
    for (let indx = 0; indx < size; indx++){
      temp.push(<DraftJS index={indx} key={indx}/>)
    }
    setList(temp);
  }, [])

  return (
    <div>
      <AutoPlaySwipeableViews enableMouseEvents resistance>
        <div style={{...styles.slide, ...styles.slide_1}}>slide n°1</div>
        <div style={{...styles.slide, ...styles.slide_2}}>slide n°2</div>
        <div style={{...styles.slide, ...styles.slide_3}}>slide n°3</div>
      </AutoPlaySwipeableViews>
      
      {myList ? myList : null}
    </div>
  )
};

export default MyComponent;