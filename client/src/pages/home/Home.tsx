import React, { useState, useEffect } from "react";
import storyApi from "../../apis/storyApi";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import StoryView from "../../components/storyView/StoryView";
import { useLanguage } from "../../context/Language.context";
import { usePreferences } from "../../context/Preferences.context";
import { Book } from "../../types/types";
import "./homeStyle.css";

const Home = () => {
    const { t } = useLanguage();
    const { selectedRegion } = usePreferences();
    const { chosenLanguage } = useLanguage();
    const [currBook, setCurrBook] = useState<Book>();

    const getRandomStory = async () => {
        //    const randomBook = await getRandomBook();
        //    setCurrBook(randomBook)
    };

    const saveToProfile = () => {};

    const getRandomBook = async () => {
        try {
            const randomBookIdx = Math.floor(
                Math.random() * selectedRegion.stories.length
            );
            const randomBookId = selectedRegion.stories[randomBookIdx];

            const { data } = await storyApi.get("/", {
                params: {
                    storyId: randomBookId,
                    languageCode: chosenLanguage.value,
                    language: chosenLanguage.label,
                },
            });
            console.log(data);
            setCurrBook(data);
        } catch (err) {
            console.log(err);
        }
    };

    const renderBook = () => {};

    useEffect(() => {
        getRandomBook();
    }, [chosenLanguage, selectedRegion]);

    return (
        <>
            <div className="home-page-container">
                <div className="story-container">
                    {!currBook ? (
                        <Spinner
                            isSpinning={selectedRegion.stories.length === 0}
                        ></Spinner>
                    ) : (
                        <StoryView book={currBook!}></StoryView>
                    )}
                </div>
                <div className="buttons-container">
                    <Button
                        btnText={t("btn.random")}
                        onBtnClicked={getRandomStory}
                    ></Button>
                    <Button
                        btnText={t("btn.save")}
                        onBtnClicked={saveToProfile}
                    ></Button>
                </div>
            </div>
        </>
    );
};

export default Home;
