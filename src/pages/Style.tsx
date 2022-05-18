import styled from 'styled-components';

export const Container = styled.div`
    margin: 0px 24px;

    >form{
        display: flex;
        flex-direction: column;

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
