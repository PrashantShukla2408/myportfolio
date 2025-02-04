const path = require("path");

const Message = require("../models/messageModel");

exports.postMessage = (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = Message.create({
      name: name,
      email: email,
      message: message,
    });
    res.status(201).json({ message: "Message sent", newMessage });
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
};
