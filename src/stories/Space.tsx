import React from "react";

const style = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    float: "left" as const,
};

const Space: React.FC = ({ children }) => {
    return (
        <div style={style}>
            {React.Children.map(children, (c, i) => (
                <span key={i} style={{ marginRight: Array.isArray(children) && i === children.length ? 0 : 10 }}>
                    {c}
                </span>
            ))}
        </div>
    );
};

export default Space;
