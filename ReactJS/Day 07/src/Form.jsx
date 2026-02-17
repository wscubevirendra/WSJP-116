function Form(props) {
    console.log(props)
    function submitHandler(e) {
        e.preventDefault();
        const data = {
            name: e.target.username.value,
            email: e.target.email.value,
            age: e.target.age.value
        }
        props.formDataHandler(data);
        e.target.reset()

    }
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <h3 className="card-title text-center mb-4">User Data</h3>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required=""
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            required=""
                            minLength={6}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            placeholder="Enter your age"

                        />

                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Add
                        </button>
                        <div id="formFeedback" className="mt-3" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form