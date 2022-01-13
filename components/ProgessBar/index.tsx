import React, { useEffect } from "react";

const ProgessBar = ({ width, percent }: any) => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(percent);
  }, [percent]);

  return (
    <div>
      <div className="progress-div bg-black" style={{ width: width }}>
        <div style={{ width: `${value}%` }} className="progress bg-mayo1" />
      </div>
    </div>
  );
};

export default ProgessBar;
