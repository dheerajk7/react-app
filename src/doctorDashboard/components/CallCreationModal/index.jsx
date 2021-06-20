import 'antd/dist/antd.css';
import './style.css';
import { Modal, Button } from 'antd';
import { useEffect, useState} from 'react';

function CallCreationModal(currentPatient) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        currentPatient ? setIsModalVisible(true) : setIsModalVisible(false);
    }, [currentPatient])

    const handleOk = () => {
        
    };

    const handleCancel = () => {
    };

    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}

export default CallCreationModal;
