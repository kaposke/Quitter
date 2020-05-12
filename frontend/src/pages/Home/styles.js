import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 1em;
    max-width: 600px;

    header {
        margin: 1em 0 2em;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {

        }

        nav ul{
            display: flex;
            list-style: none;
            
            li {
                margin-left: 1em;

                a {
                    text-decoration: none;
                    color: #333;
                }
            }
        }
    }

    ul {
        list-style: none;
    }
`;