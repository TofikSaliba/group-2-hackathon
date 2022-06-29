import axios from "axios";
import { v4 as uuid } from "uuid";
import rtlDetect from "rtl-detect";
// import dotenv from "dotenv";
// dotenv.config();

const key = process.env.TRANSLATOR_KEY;
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const location = process.env.TRANSLATOR_LOCATION;

/**
 *
 * @param {string} languageCode
 * @param {string} textToTranslate
 * @returns {Promise<{text: string, to: string}>} to is the language code( for example he, en etc.)
 */
const makeTranslationRequest = async (languageCode, textToTranslate) => {
  try {
    const { data } = await axios.request({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
        "X-ClientTraceId": uuid().toString(),
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: languageCode,
      },
      data: [
        {
          text: textToTranslate,
        },
      ],
      responseType: "json",
    });
    return data[0].translations[0];
  } catch (err) {
    console.log(err);
  }
};

const isRtlAndReverse = (languageCode, text) => {
  if (rtlDetect.isRtlLang(languageCode)) {
    text = text.split("").reverse().join("");
  }
  return text;
};

/**
 *
 * @param {string} languageCode
 * @param {string} textToTranslate
 * @returns {Promise<{text: string, to: string}>}
 * @example await translator(
    "he",
    "I would really like to drive your car around the block a few times!"
);
 * 
 */
export const translator = async (languageCode, textToTranslate) => {
  try {
    const translatedRequest = await makeTranslationRequest(
      languageCode,
      textToTranslate
    );
    // translatedRequest.text = isRtlAndReverse(
    //   languageCode,
    //   translatedRequest.text
    // );
    return translatedRequest;
  } catch (err) {
    console.log(err.message);
  }
};
