import React from "react";
import Button from "../../components/button/Button";
import StoryView from "../../components/storyView/StoryView";
import "./homeStyle.css";

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="story-container">
                <StoryView></StoryView>
            </div>
            <div className="buttons-container">
                <Button btnText="random"></Button>
                <Button btnText="save to profile"></Button>
            </div>
        </div>
    );
};

export default Home;
