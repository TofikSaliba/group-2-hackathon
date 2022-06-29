import React, { LegacyRef } from "react";
import "./pageViewStyle.css";

interface PageViewProps {
    bookTitle: string;
    pageContent: string;
    pageNumber: number;
}

const PageView = React.forwardRef(
    (
        { bookTitle, pageContent, pageNumber }: PageViewProps,
        ref: LegacyRef<HTMLDivElement>
    ) => {
        return (
            <div className="page" ref={ref}>
                <div className="page-content">
                    <h3 className="page-header">{bookTitle}</h3>
                    <p className="page-text">{pageContent}</p>
                    <p className="page-footer">{pageNumber}</p>
                </div>
            </div>
        );
    }
);

export default PageView;
