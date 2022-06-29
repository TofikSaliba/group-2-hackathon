import React, { ReactNode } from "react";

interface FavStoriesContainerProps {
    children: ReactNode;
}

const FavStoriesContainer = ({ children }: FavStoriesContainerProps) => {
    return <div className="stories-container">{children}</div>;
};

export default FavStoriesContainer;
