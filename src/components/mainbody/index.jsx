import "./style.css";

export function Mainbody(props) {
    console.log(props);
    return (
        <div className="mainbody">
            {props.children}
        </div>
    );
}