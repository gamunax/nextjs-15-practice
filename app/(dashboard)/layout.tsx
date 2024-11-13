import React from "react";

const layout = ({ children }: { childre: React.ReactNode }) => {
  return (
    <div>
      <p className="text-3xl">DASHBOARD</p>
      {children}
    </div>
  );
};

export default layout;
