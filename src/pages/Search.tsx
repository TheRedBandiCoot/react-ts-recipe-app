import { GoogleGenerativeAI } from '@google/generative-ai';
import SearchBar from '../components/SearchBar';

const MODEL_NAME = 'gemini-pro';
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });
const prompt = 'Write a story about a magic backpack.';

async function run() {
  const result = await model.generateContent(prompt);

  const response = await result.response;
  console.log(response.text());
}

export const Search = () => {
  return (
    <div className="w-screen flex items-center justify-center flex-col mt-7">
      <p className="text-3xl font-bold underline">Search Here</p>
      <SearchBar marginRight="0" />
    </div>
  );
};
