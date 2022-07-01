import React, { useState, useEffect } from "react";
import storyApi from "../../apis/storyApi";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import StoryView from "../../components/storyView/StoryView";
import { useLanguage } from "../../context/Language.context";
import { usePreferences } from "../../context/Preferences.context";
import { useUser } from "../../context/User.context";
import { Book } from "../../types/types";
import "./homeStyle.css";

const Home = () => {
    const { t } = useLanguage();
    const { selectedRegion } = usePreferences();
    const { chosenLanguage } = useLanguage();
    const [currBook, setCurrBook] = useState<Book>();
    const { currentUser } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const { setIsHome } = usePreferences();

    useEffect(() => {
        setIsHome(true);
    }, []);

    const saveToProfile = () => {};

    const getRandomBook = async () => {
        try {
            const randomBookIdx = Math.floor(
                Math.random() * selectedRegion.stories.length
            );
            const randomBookId = selectedRegion.stories[randomBookIdx];

            if (!randomBookId) return;

            const { data } = await storyApi.get("/", {
                params: {
                    storyId: randomBookId,
                    languageCode: chosenLanguage.value,
                    language: chosenLanguage.label,
                },
            });
            setIsLoading(false);
            setCurrBook(data);
        } catch (err) {
            console.log(err);
        }
    };

    const changeStoryLang = async () => {
        if (!currBook || !currBook.dataObj || !currBook.dataObj._id) return;
        try {
            const { data } = await storyApi.get("/", {
                params: {
                    storyId: currBook?.dataObj._id,
                    languageCode: chosenLanguage.value,
                    language: chosenLanguage.label,
                },
            });
            setIsLoading(false);
            setCurrBook(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleGetRandomBook = () => {
        setIsLoading(true);
        getRandomBook();
    };

    useEffect(() => {
        handleGetRandomBook();
    }, [selectedRegion]);

    useEffect(() => {
        setIsLoading(true);
        changeStoryLang();
    }, [chosenLanguage]);

    return (
        <>
            <div className="home-page-container">
                <div className="story-container">
                    {isLoading ? (
                        <Spinner></Spinner>
                    ) : (
                        <StoryView book={currBook!}></StoryView>
                    )}
                </div>
                <div className="buttons-container">
                    <Button
                        btnText={t("btn.random")}
                        onBtnClicked={handleGetRandomBook}
                    ></Button>
                    {/* {currentUser && (
                        <Button
                            btnText={t("btn.save")}
                            onBtnClicked={saveToProfile}
                        ></Button>
                    )} */}
                </div>
            </div>
        </>
    );
};

export default Home;
