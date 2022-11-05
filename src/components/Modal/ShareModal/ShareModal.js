import { Modal, useMantineTheme } from "@mantine/core";
import NavBar from "../../Home/HomeMiddle/NavBar/NavBar";

function ShareModal({ modalOpened, setModalOpened }) {
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
      opened={modalOpened}
      onClose={() => {
        setModalOpened(false);
      }}
    >
      <NavBar />
    </Modal>
  );
}

export default ShareModal;
