import React, { useEffect } from 'react';
import { FC, useState } from 'react';
import './profileShowPop.scss';

interface ViewProfilePopUpProps {
    onClose: () => void;
    onEditProfile: () => void;
}

export const ViewProfilePopUp: FC<ViewProfilePopUpProps> = ({ onClose, onEditProfile }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleEditProfileClick = () => {
        setIsVisible(false);
        onEditProfile(); // вызываем функцию открытия EditProfile
    };

    return (
        <>
            <div className={`profile ${isVisible ? 'show' : ''}`}>
                <div className='profile__inner'>
                    <div className='profile___inner--headline'>
                        <img className='profile__inner--img' src='../../../../../../images/user2.png' alt='user' />
                        <div className='inner__headline'>
                            <div className='inner__headline--name'>User Name</div>
                            <div className='inner__headline--info'>
                                <div className='headline__info--username'>@username</div>
                                <div className='headline__info--balance'>
                                    <span className='info__balance--text'>Balance:</span>
                                    <img src='../../../../../../images/miniLogo.png' alt='miniLogo' />
                                    <span className='number'>1,5M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__inner--adress'>Address: 0c0xcx1cx606g4516x51g1...</div>
                    <div className='profile__inner--buttons'>
                        <button className='inner__buttons--profile'>My profile</button>
                        <button className='inner__buttons--profile'>Balance settings</button>
                        <button className='inner__buttons--profile' onClick={handleEditProfileClick}>Edit profile</button>
                        <button className='inner__buttons--profile red__color'>Log out</button>
                    </div>
                </div>
            </div>
        </>
    );
};
