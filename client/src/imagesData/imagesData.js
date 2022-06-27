const images = require.context("../assets/img");

export const imageData = {
    avatar: images("./avatar.png"),
};
