import React, { useState, useEffect } from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";
import { Book, GetBook } from "../../types/types";
import PageView from "../pageView/PageView";
import { storyViewStyle } from "./storyViewStyle";

const StoryView = () => {
    const [currBook, setCurrBook] = useState<Book>();

    //I think this function need to be in the server side (random route)
    const getRandomBook: GetBook = () => {
        const sampleBook: Book = {
            title: "The Adventures of a Jackal",
            id: "62bb5ec863e65d1259820293",
            region: "African",
            content: [
                "In a country which is full of wild beasts of all sorts there once lived a jackal and a hedgehog",
                "and, unlike though they were, the two animals made great friends, and were often seen in each other’s company.",
                " One afternoon they were walking along a road together, when the jackal, who was the taller of the two, exclaimed: ‘Oh! there is a barn full of corn; let us go and eat some.’",
            ],
        };
        setCurrBook(sampleBook);
        return sampleBook;
    };

    useEffect(() => {
        getRandomBook();
    }, []);

    //!separate the story we scraped to chuncks of string (array of strings) on the server side
    //!we will use it to create a book like view
    const renderBookPages = () => {
        console.log(currBook);
        return currBook?.content.map((currContent, idx) => {
            return (
                <PageView
                    bookTitle={currBook.title}
                    pageContent={currContent}
                    pageNumber={idx}
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
                width={300}
                height={400}
                className="story-view"
                style={storyViewStyle}
                showCover={true}
            >
                {renderBookPages()}
            </HTMLFlipBook>
            {/* <div className="story-view"></div> */}
        </div>
    );
};

export default StoryView;
