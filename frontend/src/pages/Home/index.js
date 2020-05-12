import React from 'react';
import { Link } from 'react-router-dom';

import Quitt from '../../components/Quitt';

import { Container } from './styles';

export default function Home() {

    return (
        <Container>
            <header>
                <h2>Quitter</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>


            <ul>
                <li>
                    <Quitt />
                </li>
                <li>
                    <Quitt />
                </li>
                <li>
                    <Quitt />
                </li>
                <li>
                    <Quitt />
                </li>
            </ul>
        </Container>
    );
}