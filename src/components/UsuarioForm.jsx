import React, { useState } from 'react'

export const UsarioForm = () => {
  const [nome, setNome] = useState('')

  return (
    <form className="row-g-3" onSubmit={e => {
      e.preventDefault()
      console.log('submmit', nome)
    }}>

      <div className="col-md-6">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>

    </form>
  )
}
