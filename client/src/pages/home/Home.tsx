import React from "react";
import Button from "../../components/button/Button";
import StoryView from "../../components/storyView/StoryView";
import "./homeStyle.css";

const Home = () => {
    const getRandomStory = () => {};

    const saveToProfile = () => {};

    return (
        <div className="home-page-container">
            <div className="story-container">
                <StoryView></StoryView>
            </div>
            <div className="buttons-container">
                <Button btnText="random" onBtnClicked={getRandomStory}></Button>
                <Button
                    btnText="save to profile"
                    onBtnClicked={saveToProfile}
                ></Button>
            </div>
        </div>
    );
};

export default Home;
