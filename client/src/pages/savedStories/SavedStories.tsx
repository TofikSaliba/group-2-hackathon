import React from "react";
import { useUser } from "../../context/User.context";
import FavStoriesContainer from "./FavStoriesContainer";
import StoryCard from "./StoryCard";
import "./savedStoriesStyles.css";

const SavedStories = () => {
    const { currentUser } = useUser();
    const renderFavoriteStories = () => {
        return currentUser.favorites.map((favStory: string) => {
            return <StoryCard storyTitle={favStory}></StoryCard>;
        });
    };

    return (
        <div className="saved-stories-page">
            <div className="user-data-container">
                <h2 className="user-name">{currentUser.name}</h2>
                <h3 className="user-language">{currentUser.savedLanguage}</h3>
            </div>
            <FavStoriesContainer>
                {currentUser.favorites.length === 0 ? (
                    <h2 className="no-stories">
                        You don't have favorites book yet
                    </h2>
                ) : (
                    renderFavoriteStories()
                )}
            </FavStoriesContainer>
        </div>
    );
};

export default SavedStories;
