import { memo } from 'react'

export const Groups = memo(({ groups, addGroup }) => {
  console.log("Component Groups foi renderizado")

  return (

    <div>
      <button onClick={addGroup} type='button'>Adicionar Grupo</button>
      <h1>Lista de grupos:</h1>

      <ul>
        {groups.map(group => (
          <li key={group}>{group}</li>
        ))}
      </ul>
    </div>
  )
})

