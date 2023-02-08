import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados(){
// contenido raiz 
 const Layout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    width: 70%;
    text-shadow: 2px 4px 5px black;
    margin-top: 100px;
    box-shadow:  1px 1px 20px 5px silver, 1px 1px 1px 5px green;
    border-radius: 3px;
    `;

//   Encabezados 
    const Login = styled.h2`
    color:white;
    text-align: center;
    background-color: #434343;
    opacity: .90;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 50px;
    border-radius: 10px;
    `
    const Registro = styled.h2 `
      color: white;
      text-align: center;
      flex-direction: row;
     padding: 20px;
     width: 100%;
     margin: 0 auto;
     margin-bottom: 30px ;
    `;
    // Forms 

    // LOGIN 
    const FormLogin = styled.form`
     display: flex;
     flex-direction: column;
     background-color: black;
     width: 50%;
     padding: 50px;
     height: 350px;
     
   input{
      width: 80%;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin: 0 auto;
      margin-bottom: 10px;
   }
     button{
        background-color: white;
        padding: 10px;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover{
            background-color: #343434;
            color: white;
            opacity: .80;
        }

     }
     span{
       color: white;
       font-size: 11px;
     }
     a{
        text-decoration: none;
        color: rgb(8, 98, 232);
        padding: 5px;
        
       &:hover{
        color: rgba(8, 98, 232, 0.636);
        }
     }
     
    `;

//   REGISTER

  const FormRegistro = styled.form`
     display: flex;
     flex-direction: column;
     background-color: #434343;
     height: 350px;
      width: 50%;
     padding: 50px;
     input{
        width: 80%;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 0 auto;
        margin-bottom: 10px;
     }
     button{
        background-color: white;
        padding: 10px;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover{
            background-color: black;
            color: white;
            opacity: .80;

        }
     };
    
    `;


    return(
    <Layout>
          <FormLogin>
             <Login>LOGIN TO ACCOUNT</Login>
             <input type="text" name="" placeholder="USERNAME..." value="" />
             <input type="text" name="" placeholder="PASSWORD..." value="" />
             <button type="button" >LOGIN</button>

             <span>FORGOT PASSWRD OR USERNAME,<a href="#">CLICK HEARE</a></span>
             
          </FormLogin>

          <FormRegistro>

            <Registro>OR REGISTER ACCOUNT WHEN NOT HAVE YET</Registro>

             <input type="text" name="" placeholder="USERNAME..." value="" />
             <input type="email" name="" placeholder="EMAIL..." value="" />
             <input type="password" name="" placeholder="PASSWORD..." value="" />
             <input type="password" name="" placeholder="PASSWORD RE.TYPE..." value="" />
             <button type="button" >REGISTER</button>
              

          </FormRegistro>
      
    </Layout>
    )
}