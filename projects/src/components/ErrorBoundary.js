import React, { Component } from "react";
export default class ErrorBoundary extends Component{
    state={
        hasError:false
    }
    static getDerivedStateFromError(error)
    {
        return
        {
             hasError:false
        }
    }
    componentDidCatch(error,info)
    {
        console.log(error);
        console.log(info);
    }
    render()
    {
        <div>
        if(this.state.hasError===true)
        {
            return<h1>Something went wrong</h1>
        }
        </div>
    }
}