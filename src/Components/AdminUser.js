import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import { getAdminUserList, deleteuser } from '../Api/adminUser'
// import data from './fake_backend.json'
import PopUpModal from './modals';
import './AdminUser.css';
import { POP_UP_MODAL_CONSTANTS, POP_UP_MODAL_HEADER_CONSTANTS } from './Constants/constants';

var {
    ADD_ADMIN_USER,
} = POP_UP_MODAL_CONSTANTS;
var {
    ADD_USER,
    EDIT_USER
} = POP_UP_MODAL_HEADER_CONSTANTS;


const AdminUser = () => {
    const [userData, setUserData] = useState([]);
    const [popUpModal, setPopUpModal] = useState({
        visible: false,
        type: '',
        modalHeader: ''
    });
    const toggleModal = (type, header) => {
        setPopUpModal(prevPopUpModal => {
            return {
                ...prevPopUpModal,
                visible: true,
                type: type,
                modalHeader: header
            }
        });
    }

    const closePopupModal = () => {
        setPopUpModal(prevPopUpModal => {
            return {
                ...prevPopUpModal,
                visible: false,
                type: '',
                modalHeader: ''
            }
        });
    }

    const columns = [
        {
            title: 'Identifier',
            dataIndex: 'identifier',
            key: 'identifier',
            // render: (text, record) => (
            // <span>{record}</span>
            // )
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Last Seen',
            dataIndex: 'lastseen',
            width: 300,
            key: 'lastseen',
            render: (text, record) => (
                <span>{record.lastseen ? record.lastseen : 'N.A'}</span>
            )
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <div className="table-alignment">
                    <div className="btn-alignment">
                        <Button
                            className="btn-new"
                            title="Enable/Disable"
                            // onClick={() => fillUserInfoInModal(record, 'reset')}
                            disabled={record.role === "admin" ? true : false}>
                            <FileAddOutlined />
                        </Button>
                        <Button
                            className="btn-new"
                            onClick={() => fillUserInfoInModal(record, 'update')}
                            disabled={record.role === "admin" ? true : false}>
                            <EditOutlined />
                        </Button>
                        <Button
                            className="btn-new"
                            // onClick={() => deleteUser(record, 'delete')}
                            disabled={record.role === "admin" ? true : false}>
                            <DeleteOutlined />
                        </Button>
                    </div>
                </div>
            ),
        }
    ];



    useEffect(() => {
        getAdminUserListApi();
    }, []);



    function getAdminUserListApi() {
        // header.Authorization = 'Bearerqwer'
        getAdminUserList().then(res => {
            console.log('res', res);
            if (res) {
                setUserData(res);
            }
        }).catch(err => {
           alert('Invalid request');
        })
    }


    const fillUserInfoInModal = () => {
        toggleModal(ADD_ADMIN_USER, EDIT_USER)
    }

    // const deleteUser = (value) => {
    //     let data = {
    //         id = value.id
    //     }
    //     })
    // }

    return (
        <div>
            <h3>Admin User</h3>
            <PopUpModal
                title={popUpModal.modalHeader}
                type={popUpModal.type}
                visible={popUpModal.visible}
                onCancel={closePopupModal}
            />
            <Button className="add-user-button" onClick={() => toggleModal(ADD_ADMIN_USER, ADD_USER)}>Add User</Button>
            <Table columns={columns} dataSource={userData} pagination={false} />
        </div>
    )

}
export default AdminUser