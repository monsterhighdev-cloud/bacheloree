import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const POST = async (req) => {
  const body = await req.json();

  const { nearbyPlaces } = body;

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([
    `Based on the provided information, calculate a score from 1 to 100 to determine the suitability of the selected location for bachelors, focusing on convenience for accessing essential amenities like groceries and transportation. Use the proximity to nearby amenities and the number of available amenities to determine the score, giving higher scores to locations with closer and more frequent access to these necessary amenities. Only return the score:
    
    ${nearbyPlaces.map((item) => {
      return `Place name: ${item.name} - Place Categories: ${item.categories} - Distance: ${item.distance}`;
    })}`,
  ]);

  return new Response(result.response.text());
};
