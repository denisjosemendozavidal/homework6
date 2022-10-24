const getconfig = () => (
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

)

export default getconfig
