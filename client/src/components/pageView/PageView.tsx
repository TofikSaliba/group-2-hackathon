import React, { LegacyRef } from "react";

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
            <div ref={ref}>
                <h3>{bookTitle}</h3>
                <p>{pageContent}</p>
                <p>{pageNumber}</p>
            </div>
        );
    }
);

export default PageView;
