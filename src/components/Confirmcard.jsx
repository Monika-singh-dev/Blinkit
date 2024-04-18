import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Appaction } from "./context/Actionprovider";
import { warning } from "framer-motion";

const Confirmcard = () => {
  const { isConfirmOpen, confirmModelHnadler } = useContext(Appaction);
  return (
    <Modal isCentered onClose={confirmModelHnadler} isOpen={isConfirmOpen}>
      <ModalOverlay>
        <center>
          <ModalContent>
            <ModalHeader>
              <Heading>
                <b>Please make sure...</b>
              </Heading>
            </ModalHeader>
            <ModalBody>
              <ul>
                <li>
                  You are above 18 years of age and not buying tobacco on behalf
                  of anyone who is a minor (under 18 years of age).
                </li>
                <li>
                  Your location is not in and around a school or college
                  premises.
                </li>
              </ul>
              <p>
                We are bound to report your account in case of any
                transgressions! Read Terms & Conditions
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  marginTop: "10px",
                  border: "2px solid green",
                  backgroundColor: "white",
                  paddingLeft: "55px",
                  paddingRight: "55px",
                }}
              >
                Cancle
              </Button>
              <Spacer />
              <Button
                style={{
                  marginTop: "10px",
                  background: "green",
                  paddingLeft: "55px",
                  paddingRight: "55px",
                }}
              >
                Yes, I confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </center>
      </ModalOverlay>
    </Modal>
  );
};

export default Confirmcard;
