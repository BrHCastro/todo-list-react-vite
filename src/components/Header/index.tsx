import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Logo Ignite Player" title="Ignite Player" />
    </Container>
  );
}
