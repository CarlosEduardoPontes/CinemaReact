import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 90px;
    background-color: rgb(58, 63, 68);
    color: red;
    font-size: 20px;
    
    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 1;
        }
            nav{

                ul{
                    display: flex;
                }
                    li{
                        list-style: none;
                        margin-left: 20px; 
                    }
                        a{
                            text-decoration: none;
                            color: red;

                            :hover{
                                color: white;  
                            }
                        }
            }
`;