import React, {Fragment} from 'react'
import { Link} from 'react-router-dom'

export default function NavBar (props) {
        return (
            <div>
            
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to = {'/'} className="navbar-brand">Board Games Rule!</Link>
                    <button className="navbar-toggler" type="button" onClick={props.clearBar} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto navbar-links">
                        <li className="nav-item">
                            <Link to = {'/'} className="nav-link">
                                Home
                            </Link>
                        </li>
                        {!props.user &&
                            <Fragment>
                                <li className="nav-item">
                                    <Link to = {'/login'} className="nav-link">
                                        Log in
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = {'/signup'} className="nav-link">
                                        Sign up
                                    </Link>
                                </li>
                            </Fragment>
                        }
                        {props.user &&
                            <li className="nav-item">
                                <a className="nav-link log-out" onClick={props.logOut}>
                                    Log out
                                </a>
                            </li>
                        }
                        </ul>
                        <form className="form-inline my-2 my-lg-0 search-bar-form" onSubmit={props.formSubmition}>
                            <input className="form-control mr-sm-2 search-bar" type="search" value={props.searchBarText} onChange={props.searchBar} placeholder="Search for a rulebook" aria-label="Search"/>
                            {props.searchBarResults &&
                                <div className="auto-complete">
                                <ul>
                                    {props.showSuggestions()}
                                </ul>
                            </div>
                            }       
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
            </div>
        )
}
