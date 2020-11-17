import React, { useEffect, useState } from 'react';

type ContextProps = {
  setSelectedUsers: (ids: number[] | []) => void;
  isActive: boolean;
  userBlocked: () => void;
  userUnBlocked: () => void;
};

export const HeaderBtnControllerContext = React.createContext(
  {} as ContextProps
);

export const HeaderBtnControlProvider = (props: any) => {
  const [selectedUsers, setSelectedUsers] = useState([] as number[]);
  const [isActive, setActive] = useState(false);

  const userBlocked = () => {
    console.log('Blocked', selectedUsers);
  };

  const userUnBlocked = () => {
    console.log('userUnBlocked', selectedUsers);
  };

  useEffect(() => {
    if (selectedUsers.length > 0) {
      setActive(true);
    } else setActive(false);
  }, [selectedUsers]);

  return (
    <HeaderBtnControllerContext.Provider
      value={{
        setSelectedUsers,
        isActive,
        userBlocked,
        userUnBlocked,
      }}
      {...props}
    />
  );
};
