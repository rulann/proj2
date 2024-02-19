import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "@testing-library/react";

function Nav(){
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/product" class="nav-link">Product </a>
                    </li>
                    <li class="nav-item">
                        <a href="/payment" class="nav-link">Payment</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav