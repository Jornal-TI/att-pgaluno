import React from 'react'
import './modal-dados.css'

const ModalDados = () => {

    const nomeUsuario = "Samuel Costa"
    const emailUsuario = "samuelcosta@gmail.com"
    const cpfUsuario = "527.721.410-04"
    const enderecoUsuario = "Rua Tchurubengos"
    const telefoneUsuario = "(11)94358-5819"


    return (

        <div>
                <div className='dados-form'>


                    <div className='parte-alta'>

                        <label>Nome:</label>
                        <textarea rows="2" cols="100" value={nomeUsuario} className='txt-area-dados' readOnly />

                        <br />
                        <label>Email:</label>
                        <textarea value={emailUsuario} className='txt-area-dados' readOnly />

                        <br />
                        <label>CPF:</label>
                        <textarea value={cpfUsuario} className='txt-area-dados' readOnly />

                        <br />
                        <label>Endereço:</label>
                        <textarea value={enderecoUsuario} className='txt-area-dados' readOnly />

                        <br />
                        <label>Telefone:</label>
                        <textarea value={telefoneUsuario} className='txt-area-dados' readOnly />

                    </div>

                </div>
            

        </div>

    )

}
export default ModalDados;