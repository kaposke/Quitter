import React from 'react';

import { Container, Header, Content } from './styles';

import profilePic from '../../assets/profile-pic.png'

export default function Quitt() {

    return (
        <Container>
            <div>
                <img src={profilePic} alt='Profile Pic' />
            </div>
            <Content>
                <Header>
                    <strong>Kaposkito</strong>
                    <span>26m</span>
                </Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
            </Content>
        </Container >
    );
}