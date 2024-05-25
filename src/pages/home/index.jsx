import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";


const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };
    return (
        <div className="flex flex-col gap-10">
            <div className="text-center font-extrabold text-4xl">
                HOME
            </div>
            <button
                onClick={handleClick}
            >
                here too
            </button>
            <Button
                className="bg-bgDArk"
                onClick={handleClick}
            >
                Click me
            </Button>
        </div>
    );
};

export default Home;
