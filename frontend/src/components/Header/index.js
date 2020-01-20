import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">logotype</div>
                <div className="login-wrapper">
                    <form action="">
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Login or Register"/>
                    </form>
                </div>
                <div className="quick-search-wrapper">
                    <form action="">
                        <input type="text" placeholder="Quick search anime"/>
                    </form>
                </div>
            </header>
        );
    }
}

export default Header;
