import { ConfirmButton } from "./Button";
import { Card } from "./Card";


export function Form(){

    const labelStyle = {
        color: "black",
        margin: "8px",
        fontSize: "16px",
        fontWeight: "bold"
    }
    
    const inputStyle = {
        color: "black",
        borderRadius: "5px",
        border: "none",
        height: "24px",
        marginTop: "auto",
    }

    const dropDownStyle = {
        border: "none",
        borderRadius: "5px",
        height: "24px",
    }

    const Label = (title) => {
        return(
            <label style={labelStyle}>{title}</label>
        );
    }
    const TextInput = () => {
        return(
            <input style={inputStyle} type="text"></input>
        );
    }
    
    const DropDown = () => {
        return(
            <select style={dropDownStyle}>
                <option>HCI</option>
                <option>Media</option>
                <option>Systems</option>
                <option>Linear</option>
                <option>iOS</option>
                <option>Professionalism</option>
            </select>
        );
    }

    const InnerForm = () => {

        const divStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            display: "grid",
            gridGap: "8px",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr"
        }

        return(
            <div>
                <div style={divStyle}>
                    {Label("Name:")}
                    {TextInput()}
                    {Label("Course:")}                
                    {DropDown()}
                    {Label("Type:")}
                    {DropDown()}
                    {Label("Calendar:")}
                    {DropDown()}
                </div>
                {ConfirmButton("Start")}
            </div>
        );
    }


    return(
        Card(
            "New Task",
            InnerForm()
            )
    );
}