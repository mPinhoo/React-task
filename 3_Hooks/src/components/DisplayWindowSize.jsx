import useWindowSize from '../hooks/useWindowSize'

const DisplayWindowSize = () => {

    const {width, height} = useWindowSize()


  return (
    <div>
        <p> A Largura da janela é: {width}</p>
        <p> A Altura da janela é: {height}</p>
    </div>
  )
}

export default DisplayWindowSize