import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import EmailBg from "../assets/images/bg.jpg"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>Sign up to your newsletter below to get £100 off your first trip!</p>
        <form action="">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" />
            </label>
            <Button
              as="button"
              type="submit"
              css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
              round="true"
              primary="true"
            >
              Sign Up
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 450px;
  padding: 5rem calc((100vw-1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: clamped(1rem, 5vw, 3rem);
    margin-bottom: 1rem;
    padding: 0 1 rem;
  }
  p {
    text-align: center;
    font-size: clamped(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
  form {
    z-index: 10;
  }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    height: 48px;
    width: 350px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1 rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
