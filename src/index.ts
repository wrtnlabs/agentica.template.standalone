import { Agentica } from "@agentica/core";
import typia from "typia";
import dotenv from "dotenv";
import { OpenAI } from "openai";

/// INSERT IMPORT HERE

dotenv.config();

export const agent = new Agentica({
  model: "chatgpt",
  vendor: {
    api: new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    }),
    model: "gpt-4o-mini",
  },
  controllers: [
    /// INSERT CONTROLLER HERE
  ],
});

const main = async () => {
  console.log(await agent.conversate("What can you do?"));
};

main();
