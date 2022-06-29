import React from "react";

interface StoryCardProps {
    storyTitle: string;
}
const StoryCard = ({ storyTitle }: StoryCardProps) => {
    return (
        <div className="story-card">
            <h3>{storyTitle}</h3>
        </div>
    );
};

export default StoryCard;
