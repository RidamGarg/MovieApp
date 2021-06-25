import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware} from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
//import {thunk} from 'thunk';
const logger = ({dispatch,getState})=>(next)=>(action)=>{
console.log("Action type = ",action.type);
next(action);
}
// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action === 'function'){
//     action(dispatch);
//     return ;
//   }
//   next(action);
// }
//export const StoreContext = createContext();
// class Provider extends React.Component{
//   render(){
//     const {store} = this.props ;
//     return(
//       <StoreContext.Provider value = {store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     )
//   }
// }
// export function connect (callback){
//  return function(Component){
//    class ConnectedComponent extends React.Component{
//      constructor(props){
//        super(props);
//        this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate());
//      }
//      componentWillUnmount = ()=>{
//        this.unsubscribe();
//      }
//      render(){
//              const state = this.props.store.getState();
//              const datatoBePassedAsProps = callback(state);
//              return(
//                <Component 
//                {...datatoBePassedAsProps} 
//                {...this.props}
//                dispatch={this.props.store.dispatch}/>
//              )
//            }
//     }
//    class ConnectedComponentWrapper extends React.Component{
//     render(){
//      return(
//       <StoreContext.Consumer>
//        {store=>{
//          return <ConnectedComponent store = {store} {...this.props}/>
//        }}
//       </StoreContext.Consumer>
//      )
//     } 
//    }
//    return ConnectedComponentWrapper ;
//  }
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store ={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

