import '../styles/globals.css'
import {PokemonProvider} from '../context/store.tsx'
function MyApp({ Component, pageProps }) {
  return <PokemonProvider pokemon={pageProps.pokemon} ><Component {...pageProps} /></PokemonProvider>
  
}

export default MyApp
