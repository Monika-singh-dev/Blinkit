import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import PhoneInput from "react-phone-number-input/input";
import { Appaction } from "./context/Actionprovider";
import images from "../images";

const Logincard = () => {
  const { isLoginOpen, loginModelHnadler } = useContext(Appaction);

  // console.log(isLoginOpen);
  return (
    <Modal isCentered onClose={loginModelHnadler} isOpen={isLoginOpen}>
      <ModalOverlay>
        <center>
          <ModalContent>
            <ModalHeader>
              <img
                src={images.logo}
                alt="logo of blinkit"
                height={"60px"}
                width={"60px"}
                style={{ borderRadius: "16px" }}
              />
              India's last minute app
            </ModalHeader>
            <ModalBody>
              <a style={{ marginLeft: "4px" }} href="#">
                Login
              </a>
              or<a href="#">signup</a>
              <FormControl>
                <PhoneInput placeholder="" />
              </FormControl>
              <Button style={{ marginTop: "10px" }}>Continue</Button>
            </ModalBody>
            <ModalFooter>
              <p>
                By continuing, you agree to our Terms of service & Privacy
                policy
              </p>
            </ModalFooter>
          </ModalContent>
        </center>
      </ModalOverlay>
    </Modal>
  );
};

export default Logincard;
