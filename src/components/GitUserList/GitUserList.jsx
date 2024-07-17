import { useCallback, useEffect, useMemo, useState } from "react"
import { Groups } from "./Groups"


function calculateTotalUsers(users) {
  //Funcao de calculo pesada
  return users.length
}

export function GitUserList() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [paginationIndex, setPaginationIndex] = useState(0)
  const [query, setQuery] = useState("")
  const [groups, setGroups] = useState(["Group A", "Group B"])



  const totalUsers = useMemo(() => {
    return calculateTotalUsers(users)
  }, [users])


  const requestUsers = useCallback(() => {
    fetch(`https://api.github.com/users?since=${paginationIndex}`)
      .then(async result => {
        const values = await result.json()
        setUsers(values)
        setFilteredUsers(values)
      })
  }, [paginationIndex])

  useEffect(() => {
    requestUsers()
  }, [])

  const handleNextPage = useCallback(() => {
    const lastUserIndex = users?.length - 1
    const lastPaginationItem = users?.[lastUserIndex]?.id
    setPaginationIndex(lastPaginationItem || 0)
  }, [users])

  useEffect(() => {
    setFilteredUsers(users.filter(user => user.login.includes(query)))
  }, [query])

  const addGroup = useCallback(() => {
    setGroups(groups => [...groups, `group ${groups.length + 1}`])
  }, [])

  return (
    <>
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

        <br />

      </div>
      <Groups addGroup={addGroup} groups={groups} />
    </>

  )
}