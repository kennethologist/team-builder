function Form () {

    return (
        <div>
            <form>
                <label>Name</label>
                <input
                    id = "txtName"
                    name = "name"
                    onChange = {onChange}
                    maxLength = "40"
                    type = "text"
                />

                <input
                    id = "txtEmail"
                    name = "email"
                    onChange = {onChange}
                    maxLength = "40"
                    type = "email"
                />

                <select id = "ddRole" value = "" name = "role">
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </form>
</div>
    )
}