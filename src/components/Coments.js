import React,{useState, useEffect} from "react"
import './coments.css'

const Coments = ({postId}) => {
    const [coments, getComents] = useState([])

    useEffect (()=>{

        fetch (`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then (response => response.json())
        .then (data=> {
            getComents (data)
        }, [])
    })

    return(
        <>
            {   
                coments.map(coment=>{
                    return(

                        <div className="coment">

                            <div className="coment-name">
                                <p>Name: {coment.name}</p>
                                <p>Email: {coment.email}</p>
                            </div>
                                 
                            <div className="coment-body">
                                <p>{coment.body}</p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default Coments
