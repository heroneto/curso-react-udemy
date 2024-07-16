import { useEffect, useState } from "react"


export function GitUserList() {
  const [users, setUsers] = useState([])
  const [paginationIndex, setPaginationIndex] = useState(0)


  function requestUsers() {
    fetch(`https://api.github.com/users?since=${paginationIndex}`)
      .then(async result => {
        const values = await result.json()
        setUsers(values)
      })
  }

  useEffect(() => {
    requestUsers()
  }, [paginationIndex])

  function handleNextPage() {
    const lastUserIndex = users.length - 1
    const lastPaginationItem = users[lastUserIndex].id
    setPaginationIndex(lastPaginationItem)
  }

  return (
    <div>
      <h1>Lista de usuários:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>

      <button onClick={handleNextPage} type="button">Proxima pagina</button>
    </div>
  )
}