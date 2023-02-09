import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswer = async (req, res) => {
  const { id: id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log(error);
    return res.status(404).send("question unavailable...");
  }
  updateNoOfQuestioins(id, noOfAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId: req.userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateNoOfQuestioins = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};