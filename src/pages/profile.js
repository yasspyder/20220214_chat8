import { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, fullProfileSelector } from "../store/profile";
import { conversationsSelector } from "../store/conversations";
import { ProfileForm } from "../components";

export const ProfilePage = ({ someProp = "test" }) => {
  const [count, setCount] = useState(0);
  const { isVisibleProfile, firstName, lastName, ...profile } =
    useSelector(fullProfileSelector);

  // const getConversations = useCallback(
  //   (state) => conversationsSelector(someProp)(state),
  //   [someProp]
  // );
  const getConversations = useMemo(
    () => conversationsSelector(someProp),
    [someProp]
  );

  // @TODO  для примера на уроке
  const conversations = useSelector(getConversations);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Profile {count}</h1>

      {isVisibleProfile && (
        <div>
          <h2>firstName: {firstName}</h2>
          <h2>lastName: {lastName}</h2>
          <h2>phone: {profile.phone}</h2>
        </div>
      )}

      <button onClick={() => dispatch(toggleVisibleProfile())}>
        toggleVisibleProfile
      </button>

      <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
    </div>
  );
};
