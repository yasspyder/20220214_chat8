import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
// import PropTypes from "prop-types";
import {
  messagesSelectorByRoomId,
  sendMessageWithBot,
} from "../../store/messages";
import { Message } from "./message";
import { useStyles } from "./use-styles";

const BOT_ANSWER = {
  0: "0000",
  1: "11111",
  2: "2222",
  3: "3333",
  4: "4444",
};

const getBotAnswer = (message) => {
  const answers = {
    0: "0000",
    1: "11111",
    2: "2222",
    3: "3333",
    4: "4444",
  };

  return answers[message] || "not found answer";
};

export const MessageList = () => {
  const s = useStyles();
  const { roomId } = useParams();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectorByRoomId(roomId));

  // @TODO перенести в стор
  const [value, setValue] = useState("");

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(
          sendMessageWithBot(roomId, { author: author || "Bot", message })
        );
        setValue("");
      }
    },
    [dispatch, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
        ))}
      </div>

      <Input
        className={s.input}
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={() => send(value)} className={s.icon} />}
          </InputAdornment>
        }
      />
    </>
  );
};

// MessageList.propTypes = {
//   test1: PropTypes.number.isRequired,
//   test2: PropTypes.array.isRequired,
//   test3: PropTypes.bool.isRequired,
//   test4: PropTypes.shape({
//     id: PropTypes.bool.isRequired,
//   }).isRequired,
//   test5: PropTypes.func.isRequired,
// };
