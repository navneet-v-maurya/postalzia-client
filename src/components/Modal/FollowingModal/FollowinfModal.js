import { Modal, useMantineTheme } from "@mantine/core";
import List from "./List/List";

function FollowingModal({ modal, setModal, chats, setChats }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      size="60%"
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modal}
      onClose={() => {
        setModal(false);
      }}
    >
      <List setModal={setModal} chats={chats} setChats={setChats} />
    </Modal>
  );
}

export default FollowingModal;
