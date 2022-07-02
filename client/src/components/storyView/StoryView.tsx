import React, { useState, useEffect } from "react";
import OriginTitle from "../originTitle/OriginTitle";
import "./storyViewStyle.css";
import HTMLFlipBook from "react-pageflip";
import { Book } from "../../types/types";
import PageView from "../pageView/PageView";
import PageCover from "../pageView/cover/PageCover";

interface StoryViewProps {
  book: Book;
}

const StoryView = ({ book }: StoryViewProps) => {
  const renderBookPages = () => {
    return book?.dividedPages.map((currContent, idx) => {
      return (
        <PageView
          bookTitle={book.dataObj.title}
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
        height={280}
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
        <PageCover>{book.dataObj.title}</PageCover>
        {renderBookPages()}
        <PageCover> </PageCover>
        <PageCover>The END.</PageCover>
      </HTMLFlipBook>
    </div>
  );
};

export default StoryView;
