import React from "react";

export const ButtonsComp = ({sumClicked,subClicked,multClicked,divClicked,modClicked}) => {
  return (
    <div className="d-flex justify-content-between">
      <button onClick={sumClicked} type="button" className="btn btn-secondary mr-10" >
        +
      </button>
      <button onClick={subClicked} type="button" className="btn btn-secondary ">
        -
      </button>
      <button onClick={multClicked} type="button" className="btn btn-secondary">
        *
      </button>
      <button onClick={divClicked} type="button" className="btn btn-secondary">
        /
      </button>
      <button onClick={modClicked} type="button" className="btn btn-secondary">
        %
      </button>
    </div>
  );
};
