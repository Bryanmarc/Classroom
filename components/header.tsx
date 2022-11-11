function Header(props: any) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

            <div style={{ marginBottom: '5px' }} className="mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{props.pageType}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <a className="mdl-navigation__link" href="">Class Page</a>
                            <a className="mdl-navigation__link" href="">Taskboard</a>
                            <a className="mdl-navigation__link" href="">My Page</a>
                            <a className="mdl-navigation__link" href="">Logout</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Pages</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Class Page</a>
                        <a className="mdl-navigation__link" href="">Taskboard</a>
                        <a className="mdl-navigation__link" href="">My Page</a>
                        <a className="mdl-navigation__link" href="">Logout</a>
                    </nav>
                </div>
                
            </div>
        </>
    )
}

export default Header;