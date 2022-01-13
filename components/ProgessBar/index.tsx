import React, { useEffect } from "react";

const ProgessBar = ({ width, percent }: any) => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(percent);
  }, [percent]);

  return (
    <div>
      <div className="progress-div bg-mayo1" style={{ width: width }}>
        <div style={{ width: `${value}%` }} className="progress bg-mayo2" />
      </div>
    </div>
  );
};

export default ProgessBar;
