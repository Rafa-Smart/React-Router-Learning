import { useNavigate } from "react-router"

export default function About(){

    // jadi ini tuh use navigate, adi selain pake navlink dan link

    const navigate = useNavigate();

    // ini kita akna pake yang -1, jadi redirect

    function handleOnclick(e){
        navigate(-1)
    }

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={handleOnclick}>Go To HomePage (redirect)</button>
            <p>Hello welcome to the AboutPage!</p>
        </div>
    )
}