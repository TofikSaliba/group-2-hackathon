import React from "react";
import Button from "../../components/button/Button";
import StoryView from "../../components/storyView/StoryView";
import { useLanguage } from "../../context/Language.context";
import regionsApi from "../../apis/regionsApi";
import "./homeStyle.css";
import { Region } from "../../types/types";

const Home = () => {
    const { t } = useLanguage();

    const getAllRegions = async () => {
        const { data } = await regionsApi.get("/regions/getAllRegions");
        const allRegions = data.map((region: Region) => region.regionName);
        console.log(allRegions);

        return allRegions;
    };

    const getRandomStory = async () => {
        await getAllRegions();
    };

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
