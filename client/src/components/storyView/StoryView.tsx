import React, { useState, useEffect } from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";
import { Book } from "../../types/types";
import PageView from "../pageView/PageView";
import PageCover from "../pageView/cover/PageCover";

interface StoryViewProps {
    book: Book;
}

const StoryView = ({ book }: StoryViewProps) => {
    const renderBookPages = () => {
        return book?.dividedPages.map((currContent, idx) => {
            return (
                <PageView
                    bookTitle={book.dataObj.title}
                    pageContent={currContent}
                    pageNumber={idx + 1}
                    key={currContent}
                ></PageView>
            );
        });
    };

    return (
        // <div className="story-view-container">
        <>
            <OriginTitle></OriginTitle>
            <div className="story-view-container">
                {/*@ts-ignore */}
                <HTMLFlipBook
                    width={550}
                    height={733}
                    // size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    autoSize={true}
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    className="story-view"
                    showCover={true}
                    usePortrait={true}
                >
                    <PageCover>{book.dataObj.title}</PageCover>
                    {renderBookPages()}
                    <PageCover> </PageCover>
                    <PageCover>The END.</PageCover>
                </HTMLFlipBook>
            </div>
        </>
        // </div>
    );
};

export default StoryView;

// {
//     title: "The Adventures of a Jackal",
//     id: "62bb5ec863e65d1259820293",
//     region: "African",
//     content: [
//         "In a country which is full of wild beasts of all sorts there once lived a jackal and a hedgehog",
//         "and, unlike though they were, the two animals made great friends, and were often seen in each other’s company.",
//         " One afternoon they were walking along a road together, when the jackal, who was the taller of the two, exclaimed: ‘Oh! there is a barn full of corn; let us go and eat some.’",
//         "gfjdkhgkjvdfkvkdfvk",
//         "nfdijlvdfivjkdf",
//         "fkdskjdshfdskjfhkdhds",
//     ],
// }
