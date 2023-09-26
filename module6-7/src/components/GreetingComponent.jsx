function GreetingComponent(props) {
    
    // return (
    // <>
    // <div className="GreetingComponent">
    // {name ? <h1>Hello {greetingName}!</h1> : <h1>Hello World!</h1>}
    // </div>
    // </>
    // )
    // }

    return (
        <>
        <div className="GreetingComponent">
        {props.children ? <h1>Hello {props.children}!</h1> : <h1>Hello World!</h1>}
        </div>
        </>
        )
        }
  
export default GreetingComponent