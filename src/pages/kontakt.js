import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledForm = styled.form`
    
    margin: 0;
 
  h2 {padding:.5rem;}

  label {
    padding: 0.5rem;
    margin: 0;
}

label span {
    opacity: 0.5;
}

input, textarea {
    width: 90%;
    font-size: 1.3rem;
    padding: 0.6rem;
    border: 1px solid rgba(51, 51, 51, .5);
    border-radius: 3px;
    margin: .5rem;
    margin-bottom:1rem;
}

div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

button.btn,
    input.btn {
    font-size: 1rem;
    margin: 0.5rem;
    padding: .7rem;
    width: 80%;
    background-color: rgba(51, 51, 51, .2);
    border: 1px solid rgba(51, 51, 51, .5);
    color:#444;
}

@media(min-width: 800px) {
  max-width: 45rem;
  input, textarea { 100%;}
   div {
        flex-direction: row;
     padding-left:0;
    }

    button.btn, input.btn {
        font-size: 1.1rem;
        width: 45%; 
    }
}

button.btn:hover,
    input.btn:hover {
    cursor: pointer;
    background-color: rgba(51, 51, 51, .3);
  box-shadow: 2px 2px 3px rgba(51, 51, 51, .3);
    color: #111;
}

`;

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Kontakt" />
            <section className="section-meta">

                <StyledForm action=""
                      className="form"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field">
                    <h2>Kontakt</h2>
                    <input type="hidden" name="bot-field" aria-label="hidden field" />
                    <input type="hidden" name="form-name" value="contact" aria-label="hidden field" />

                    {/*<label htmlFor="name" aria-label="name">Nadawca / Sender</label><br />*/}
                    {/*<input type="text" id="name" name="name" /><br />*/}
                    <label htmlFor="email">E-mail / reply-to</label><br />
                    <input
                        type="email"
                        // id="email"
                        name="_replyto"
                        id="_replyto"
                        aria-label="email"
                    /><br />
                    {/*<label htmlFor="title">Tytuł wiadomości / Title</label><br />*/}
                    {/*<input type="text" id="title" name="title" /><br />*/}
                    <label htmlFor="message">Wiadomość / Message <span>(wymagane / required)</span></label><br />
                    <textarea
                        name="message"
                        id="message"
                        rows="10"
                        cols="30"
                        aria-label="text here"
                        required
                    />
                    <div>
                        <button type="submit" className="btn">Wyślij wiadomość / Send</button>
                        <input
                            type="reset"
                            value="Wyczyść formularz / Clean"
                            className="btn"
                            aria-label="clear button"
                        />
                    </div>
                </StyledForm>
            </section>
        </Layout>
    )
}

export default ContactPage