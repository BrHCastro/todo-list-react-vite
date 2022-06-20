import { Container } from "./styles";
import { author, version } from "../../../package.json";
import { GitBranch, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <Container>
      <div className="author">
        <p>Versão: {version}</p>
        <p>
          Desenvolvido com ❤️ por <a href={author.linkedin} target="_blank" rel="noreferrer">{author.name}</a>
        </p>
      </div>
      <div className="social">
        <a title="LinkedIn" href={author.linkedin} target="_blank" rel="noreferrer"> 
          <LinkedinLogo size={32} weight="thin" />
        </a>
        <a title="GitHub" href={author.github} target="_blank" rel="noreferrer">
          <GithubLogo size={32} weight="thin" />
        </a>
        <a title="Repositório" href={`${author.github}todo-list-react-vite`} target="_blank" rel="noreferrer"> 
          <GitBranch size={32} weight="thin" />
        </a>
      </div>
    </Container>
  );
}
