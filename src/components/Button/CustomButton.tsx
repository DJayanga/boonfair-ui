import React from 'react';
import { Button } from 'antd';

export const CustomButton: React.FC<ButtonProps> = ({
    onClick,
    disabled = false,
    type = 'primary',
    size = 'medium',
    buttonName,
}) => {
    const buttonStyle = {
        backgroundColor: type === 'primary' ? '#FF8900' : '#223645',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        fontWeight: 'bold',
        padding: '10px 18px',
        height : 'auto',
    };

    return (
        <Button
            className={`button ${type} ${size}`}
            onClick={onClick}
            disabled={disabled}
            style={buttonStyle}
        >
            {buttonName}
        </Button>
    );
};

type ButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    buttonName: string;
    className?: string;
};
