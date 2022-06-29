import React, { useState, useEffect } from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";
import { Book, GetBook } from "../../types/types";
import PageView from "../pageView/PageView";
import { storyViewStyle } from "./storyViewStyle";
import { usePreferences } from "../../context/Preferences.context";
import storyApi from "../../apis/storyApi";
import { useLanguage } from "../../context/Language.context";

const StoryView = () => {
    const [currBook, setCurrBook] = useState<Book>();
    const { selectedRegion } = usePreferences();
    const { chosenLanguage } = useLanguage();

    const getRandomBook = async () => {
        const randomBookIdx = Math.floor(
            Math.random() * selectedRegion.stories.length
        );
        const randomBookId = selectedRegion.stories[randomBookIdx];
        const { data } = await storyApi.get("/", {
            data: { storyId: randomBookId, language: chosenLanguage },
        });
        setCurrBook({
            title: "The Adventures of a Jackal",
            id: "62bb5ec863e65d1259820293",
            region: "African",
            content: [
                "In a country which is full of wild beasts of all sorts there once lived a jackal and a hedgehog",
                "and, unlike though they were, the two animals made great friends, and were often seen in each other’s company.",
                " One afternoon they were walking along a road together, when the jackal, who was the taller of the two, exclaimed: ‘Oh! there is a barn full of corn; let us go and eat some.’",
                "gfjdkhgkjvdfkvkdfvk",
                "nfdijlvdfivjkdf",
                "fkdskjdshfdskjfhkdhds",
            ],
        });

        return;
    };

    useEffect(() => {
        getRandomBook();
    }, []);

    const renderBookPages = () => {
        return currBook?.content.map((currContent, idx) => {
            return (
                <PageView
                    bookTitle={currBook.title}
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
                height={300}
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
                {renderBookPages()}
            </HTMLFlipBook>
        </div>
    );
};

export default StoryView;
