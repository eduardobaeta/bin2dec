import styled from 'styled-components';

export const Container = styled.div`
    >form{
        display: flex;
        flex-direction: column;

        margin: 0px 24px;

        >div{
            display: flex;
            align-items: center;

            >label{
                margin-right: 12px;
            }

            >button{
                margin-left:12px;
            }
        }
    }
`;
