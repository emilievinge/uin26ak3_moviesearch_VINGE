// Kommer fra Home

 const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])
const storedHistory = localStorage.getItem("search")

useEffect(() => {
        localStorage.setItem("search", JSON.stringify(history))
    }, [history])


    {focused ? <History history={history} setSearch={setSearch} /> : null}