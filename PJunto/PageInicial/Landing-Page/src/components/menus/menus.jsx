import React from 'react';
import './menus.css'

function MenusLa() {
  return (
    <div>
      <div className='card-menu-lat'>
          <div>
            <div>
              <div className='title-menu'><h5>Pesquisar</h5></div>
                <div className='d-flex'>
                  <input type="text" className="input-custom-width"/>
                  <button className='btn-menu'>Pesquisar</button>
                </div>
            </div>
          </div>
      </div>
      <div className='card-menu-lat margin-top'>
          <div>
            <div>
              <div className='title-menu'><h5>Posts Recentes</h5></div>
                <div className='d-flex'>
                  <a href = "https://www.senac.br/">titulo feed1</a>
                  <a href = "https://www.senac.br/">titulo feed2</a>
                  <a href = "https://www.senac.br/">titulo feed3</a>
                </div>
            </div>
          </div>
      </div>
      <div className='card-menu-lat margin-top'>
          <div>
            <div>
              <div className='title-menu'><h5>Arquivados</h5></div>
                <div className='d-flex'>
                <a href = "https://www.senac.br/">Janeiro 2023</a>
                <a href = "https://www.senac.br/">Fevereiro 2023</a>
                <a href = "https://www.senac.br/">Março 2023</a>
                </div>
            </div>
          </div>
      </div>
      <div className='card-menu-lat margin-top'>
          <div>
            <div>
              <div className='title-menu'><h5>Categorias</h5></div>
                <div className='d-flex'>
                <a href = "https://www.senac.br/">Hardware/Software</a>
                <a href = "https://www.senac.br/">Redes</a>
                <a href = "https://www.senac.br/">Programação</a>
                <a href = "https://www.senac.br/">Senac</a>
                <a href = "https://www.senac.br/">Favoritos</a>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default MenusLa;