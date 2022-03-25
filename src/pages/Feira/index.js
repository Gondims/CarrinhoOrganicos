import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from 'components/Produto';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useCarrinhoContext } from 'common/contexts/Carrinho';




function Feira() {
  const history = useHistory();
  const { nome, saldo = 0 } = useContext(UsuarioContext);
  const { quantidadeCarrinho } = useCarrinhoContext();
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {nome}!</h2>
          <h3> Saldo: R${saldo.toFixed(2)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
        <p> Acima de $10,00 frete grátis </p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
      <Button
        variant="contained"
        color="primary"
        disabled={quantidadeCarrinho === 0}
        onClick={() => history.push('/carrinho')
      }
        
      >
        Avançar
      </Button>
    </Container>
  )
}

export default Feira;