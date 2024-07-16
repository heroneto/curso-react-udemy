import { useEffect, useMemo, useState } from "react"


function calculateTotalUsers(users) {
  console.log("Calculando total de usuarios")
  //Funcao de calculo pesada
  return users.length
}

export function GitUserList() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [paginationIndex, setPaginationIndex] = useState(0)
  const [query, setQuery] = useState("")




  const totalUsers = useMemo(() => {
    return calculateTotalUsers(users)
  }, [users])


  function requestUsers() {
    fetch(`https://api.github.com/users?since=${paginationIndex}`)
      .then(async result => {
        const values = await result.json()
        setUsers(values)
        setFilteredUsers(values)
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

  useEffect(() => {
    setFilteredUsers(users.filter(user => user.login.includes(query)))
  }, [query])



  return (
    <div>
      <div>
        <h1>Informações gerais:</h1>
        <div>
          <span>
            Total de usuário da lista: {totalUsers}
          </span>
          <br />
          <span>
            Total encontrado no filtro: {filteredUsers.length}
          </span>
        </div>
        <div>
          <input value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Insira um valor para filtrar" />
        </div>
      </div>
      <h1>Lista de usuários:</h1>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>

      <button onClick={handleNextPage} type="button">Proxima pagina</button>
    </div>
  )
}