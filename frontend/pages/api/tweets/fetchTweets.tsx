import { NextApiRequest, NextApiResponse } from "next";
import { fetchTweets } from "../../../utils/tweet_handler";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("fetching tweet")
    const tweets = await fetchTweets()

    res.status(200).json({ tweets });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};
