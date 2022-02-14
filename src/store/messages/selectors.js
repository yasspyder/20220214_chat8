export const messagesSelectorByRoomId = (roomId) => (state) => {
  return state.messages.messages[roomId] || [];
};
