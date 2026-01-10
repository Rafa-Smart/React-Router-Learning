import { useNavigate } from "react-router"

export default function Home(){
    // jadi ini tuh use navigate, adi selain pake navlink dan link

    const navigate = useNavigate();

    function handleOnclick(e){
        navigate({
            pathname:'/about'
        })
    }
    
    return (
        <div>
            <h1>Halaman Home</h1>
            <button onClick={handleOnclick}>Go To AboutPage</button>
            <p>Hello welcome to the HomePage!</p>
        </div>
    )
}