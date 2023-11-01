import "./Header.css";
// import {AiOutlineBell} from ""
const Header = () => {
    return (
        <div>
            <p>About us</p>
            <p>Help</p>
            <p>FAQ</p>
            {/* <p> <AiOutlineBell/> </p> */}
            <img src="/public/images/userIcon.webp" alt="" className="userIcon"/>
            
        </div>
    );
};

export default Header;