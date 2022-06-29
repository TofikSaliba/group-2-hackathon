export const splitContent = async (req, res, next) => {
  let oldSend = res.send;
  res.send = function (data) {
    res.send = oldSend; // set function back to avoid the 'double-send'

    try {
      if (!data.storyContent) throw new Error();
      const dividedPages = [];
      const splittedContent = data.storyContent.split("\n\n");
      let remainder = "";
      for (let i = 0; i < splittedContent.length; i++) {
        remainder += `${splittedContent[i]}\n\n`;
        if (1100 <= remainder.length && remainder.length <= 1300) {
          dividedPages.push(remainder);
          remainder = "";
          continue;
        } else if (remainder.length < 1100) {
          continue;
        } else {
          let j = 1300;
          while (
            j < remainder.length &&
            remainder[j] !== "." &&
            remainder[j] !== "!" &&
            remainder[j] !== "?"
          ) {
            j++;
          }

          const sliced = remainder.slice(0, j);
          dividedPages.push(sliced);
          remainder = remainder.slice(j);
        }
      }

      const dataObj = data.toObject();

      delete dataObj.storyContent;
      return res.send({ dataObj, dividedPages });
    } catch (error) {
      res.send("not found");
    }
  };
  next();
};
