import React from 'react';

interface Props {
  number: number;
}

const Ball: React.FC<Props> = (props) => {
  return (
      <div className="ball">{props.number}</div>
  );

};

export default Ball;