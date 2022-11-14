import { Modal, useMantineTheme } from "@mantine/core";
import InfoForm from "./InfoForm/InfoForm";

function ProfileModal({ modal, setModal, user }) {
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
      <InfoForm user={user} setModal={setModal} />
    </Modal>
  );
}

export default ProfileModal;
