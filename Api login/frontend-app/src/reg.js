import { useRef, useState, useEEffect } from "react;";
import { faCheck , faTimes , faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// VALIDATION OF USERNAME
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
// VALIDATION OF PASSWORD
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!$@-%#]).{8,12}$/;


const reg = () => {
  return (
    <div>
        
    </div>
  )
}

export default reg