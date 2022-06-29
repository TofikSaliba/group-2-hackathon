import React, { useState, useEffect } from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";
import { Book } from "../../types/types";
import PageView from "../pageView/PageView";

interface StoryViewProps {
    book: Book;
}

const StoryView = ({ book }: StoryViewProps) => {
    const renderBookPages = () => {
        // console.log(currBook);
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
        <div className="story-view-container">
            <OriginTitle></OriginTitle>
            {/*@ts-ignore */}
            <HTMLFlipBook
                width={400}
                height={400}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="story-view"
            >
                <PageView
                    bookTitle={""}
                    pageContent={book.dataObj.title}
                    isOpeningPage
                ></PageView>
                {renderBookPages()}
            </HTMLFlipBook>
        </div>
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
