import { List } from "@mui/material";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector((state) => {
    return state.conversations.conversations;
  });

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (conversation) => {
      dispatch(deleteConversation(conversation));
      setTimeout(() => navigate("/chat"));
    },
    [dispatch, navigate]
  );

  return (
    <List component="nav">
      <button onClick={createConversationByName}>create room</button>

      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={roomId === chat}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  );
};
