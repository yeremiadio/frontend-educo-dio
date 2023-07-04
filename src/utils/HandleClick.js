import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HandleClick(props) {
    const [setisSuccess] = useState(false);
    const [setisError] = useState(false);

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log("data email", data.get("email"));
        console.log("data password", data.get("password"));
        
        const email = data.get("email");
        const password = data.get("password");

        if (email === "hadiwardana90@gmail.com" && password === "putra1927") {
        setisSuccess(true);

        const urlStateParam = {
            user : "Hadi",
            fullName : "Hadi Wardana Putra",
            email: email,
            token: true,
        }

        return navigate (props.navigate, {
            state: urlStateParam,
        });
        } else {
            setisError(true);
        }
    }

    const handleClose = () => {
        setisSuccess(false);
        setisError(false);
    }

    return ({handleSubmit} && {handleClose});
}
