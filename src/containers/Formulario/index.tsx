import { MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Titulo" />
      <Campo as="textarea" placeholder="Descrição da tarefa"></Campo>
      <Opcoes>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <button type="submit">Cadastrar</button>
    </Form>
  </MainContainer>
)

export default Formulario
