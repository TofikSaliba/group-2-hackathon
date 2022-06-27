import React from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";

const StoryView = () => {
    //!separate the story we scraped to chuncks of string (array of strings) on the server side
    //!we will use it to create a book like view
    const renderBookPages = () => {};

    return (
        <div className="story-view-container">
            <OriginTitle></OriginTitle>
            <div className="story-view"></div>
        </div>
    );
};

export default StoryView;
