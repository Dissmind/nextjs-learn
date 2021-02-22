import App from 'next/app'
import {Provider} from 'react-redux'
import React from 'react'
import withRedux, {createWrapper} from 'next-redux-wrapper'
import store from '../store'


class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx) : {}

      return {pageProps}
  }


  render() {
    const {Component, pageProps} = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }
}


const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
