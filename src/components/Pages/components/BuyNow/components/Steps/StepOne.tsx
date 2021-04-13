import { useState } from 'react';
import { Typography, Input, Button, Modal } from 'antd';

const { Title } = Typography;

interface IProps {
	current: number;
}

const StepOne = (props: IProps): JSX.Element => {
	const [text, setText] = useState<string>('');
	const [modal, setModal] = useState<boolean>(false);

	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);

	return (
		<>
			{props.current === 0 && (
                <>
				<div>
					<p>
						To place your order, log in by entering your 10 digit mobile number
					</p>
					<p>Mobile Number</p>
					<Input
						onChange={e => setText(e.target.value)}
						style={{
							width: '300px',
							marginRight: '1rem',
						}}
						prefix='+256'
					/>
					<Button
						disabled={text.trim().length > 0 ? false : true}
						type='primary'
						className='btn-special'
                        onClick={openModal}
                        >
						Login
					</Button>
				</div>
   
                <div>
                <Modal title="Verify Number" visible={modal} onCancel={closeModal}>
                    <div
                    style={{
                        textAlign: "center"
                    }}
                    >

                   <p>Please enter your verification code sent via SMS to +256 76 633 4574</p>
                    </div>
                </Modal>
                </div>
                </>
			)}
		</>
	);
};

export default StepOne;
