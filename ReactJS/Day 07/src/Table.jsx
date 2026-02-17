import React from 'react'

function Table(props) {
    return (
        <div className="container mt-4">

            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr className="sticky-top">
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.formData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.email}</td>
                                    <td><button onClick={() => props.deleteHandler(index)} type="button" class="btn btn-primary">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </div>

    )
}


export default Table;
