import { Layout, Card, Checkbox } from 'antd';
import { CustomButton } from '../Button/CustomButton';
import { PaperClipOutlined } from '@ant-design/icons';

export const Sidebarlayout = () => {
    const cardClassName = 'custom-card';
    const iconClassName = 'custom-icon';
    const checkboxClassName = 'custom-checkbox';

    return (
        <Layout style={{ background: 'none' }}>
            <Card className={cardClassName}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: "5px" }}>
                    <div>
                        <p>Case Id</p>
                        <p>Status</p>
                        <p>Opened</p>
                        <p>Support Rep</p>
                    </div>
                    <div>
                        <p>: JSU-998</p>
                        <p>: On Hold</p>
                        <p>: 10/11/2022</p>
                        <p>: Rep 1</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '15px', gap: '10px' }}>
                    <CustomButton buttonName="Close Case" type='secondary' />
                    <CustomButton buttonName="Escalate Case" />
                </div>
            </Card>
            <Card className={cardClassName}>
                <h3>Attachments</h3>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: "5px", marginTop: '5px' }} >
                    <span className={iconClassName}><PaperClipOutlined /></span>
                    <p style={{ paddingTop: '4px' }}>Attachment 1.pdf</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: "5px", marginTop: '5px' }} >
                    <span className={iconClassName}><PaperClipOutlined /></span>
                    <p style={{ paddingTop: '4px' }}>Attachment 2.pdf</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '15px', gap: '10px' }}>
                    <CustomButton buttonName="Add files" />
                </div>

            </Card>
            <Card className={cardClassName}>
                <h3>Sharing Options</h3>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', gap: '5px', marginTop: '5px' }}>
                    <Checkbox className={checkboxClassName} checked = {true}>Off</Checkbox>
                    <Checkbox className={checkboxClassName}>Specific User</Checkbox>
                    <Checkbox className={checkboxClassName}>Link</Checkbox>
                </div>
            </Card>
        </Layout>
    );
};
