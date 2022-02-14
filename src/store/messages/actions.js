import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./types";

export const sendMessage = (roomId, message) => ({
  type: SEND_MESSAGE,
  payload: { roomId, message },
  // meta: {
  //   delay: 3000,
  // },
});

export const deleteMessage = (roomId, messageId) => ({
  type: DELETE_MESSAGE_BY_ID,
  payload: { roomId, messageId },
});
