import React from "react";

const Space: React.FC = ({ children }) => {
    return (
        <div style={{display: "flex"}}>
            <div style={{float: "left"}}>
                {React.Children.map(children, (c, i) => (
                    <span key={i} style={{ marginRight: Array.isArray(children) && i === children.length ? 0 : 10 }}>
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Space;
