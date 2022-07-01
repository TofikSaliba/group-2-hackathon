import React from "react";
import { ReactNode } from "react";

interface PageCoverProps {
    children: ReactNode;
}

const PageCover = React.forwardRef(({ children }: PageCoverProps, ref: any) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                <h2>{children}</h2>
            </div>
        </div>
    );
});

export default PageCover;
