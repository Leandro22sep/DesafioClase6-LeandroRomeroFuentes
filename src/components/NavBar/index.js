const NavBar = (props) => {
    if(props.type === "header"){
        return(
            <>
                <nav className="nav">
                    <a href="#">link-header</a>
                    <a href="#">link-header</a>
                    <a href="#">link-header</a>
                </nav>
            </>
        )
    }else if(props.type === "footer"){
        return(
            <>
                <nav className="nav">
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                    <a href="#">link-footer</a>
                </nav>
            </>
        )
    }
    
}

export default NavBar;