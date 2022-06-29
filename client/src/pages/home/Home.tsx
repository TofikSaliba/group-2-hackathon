import React from "react";
import Button from "../../components/button/Button";
import StoryView from "../../components/storyView/StoryView";
import { useLanguage } from "../../context/Language.context";
import "./homeStyle.css";

const Home = () => {
    const { t } = useLanguage();

    const getRandomStory = async () => {};

    const saveToProfile = () => {};

    return (
        <div className="home-page-container">
            <div className="story-container">
                <StoryView></StoryView>
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
    );
};

export default Home;
