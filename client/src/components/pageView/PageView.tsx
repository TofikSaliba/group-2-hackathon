import React, { LegacyRef } from "react";
import "./pageViewStyle.css";

interface PageViewProps {
    bookTitle: string;
    pageContent: string;
    pageNumber?: number;
    isOpeningPage?: boolean;
}

const PageView = React.forwardRef(
    (
        { bookTitle, pageContent, pageNumber, isOpeningPage }: PageViewProps,
        ref: any
    ) => {
        return (
            <div className="page" ref={ref}>
                <div className="page-content">
                    <p className="page-number">{pageNumber}</p>
                    <h3 className="page-header">{bookTitle}</h3>
                    <p
                        className={`page-text ${
                            isOpeningPage ? "opening-page" : ""
                        }`}
                    >
                        {pageContent}
                    </p>
                </div>
            </div>
        );
    }
);

export default PageView;
