import React from 'react';
// CONSTANTS
import { POP_UP_MODAL_CONSTANTS } from '../Constants/constants';
// POPUPMODALS
import { AddUser } from  './Adduser';

var  {
    ADD_ADMIN_USER
} = POP_UP_MODAL_CONSTANTS;

const PopUpModal = (props) => {
    function getModelContent(props) {
        switch (props.type) {
            case ADD_ADMIN_USER: {
                return <AddUser {...props} />
            }
            default: {
                return false
            }
        }
    }
    let ModalData = getModelContent(props);
    return ModalData;
}
export default PopUpModal
