import "./FormMessage.css"

export function FormMessage(props) {
    let inputClass = "";
    if(props.invalid===false) {
        inputClass += " invalid-field" 
    }
    return(
        <div className="input-field" >
            <p>{props.label}</p>
            <textarea onChange={(event)=>props.handleChange(event,props.id)}  placeholder="Write here your message" className={inputClass}></textarea>
        </div>
        
    )
}