export function Groups({ groups, addGroup }) {
  console.log("Renderizando componente Groups")
  return (
    <div>
      <h1>Grupos</h1>
      <ul>
        {groups.map(group => (
          <li key={group}>{group}</li>
        ))}
      </ul>
      <button onClick={addGroup} type='button'>Add new group</button>
    </div>
  )
}