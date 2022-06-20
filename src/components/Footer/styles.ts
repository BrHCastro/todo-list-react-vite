import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 736px;
  margin: 6rem auto 0;
  padding: 1rem 0;
  border-top: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--blue);
    text-decoration: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text);
    font-size: 0.875rem;

    p:first-child::after {
      content: '•';
      margin-left: 0.5rem;
      color: var(--blue);
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    a {
      color: var(--purple);
    }
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .author {
      flex-direction: column;
      gap: 2rem;

      p {
        position: relative;
        text-align: center;

        &:first-child::after {
          content: '';
          margin-left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--purple);
          position: absolute;
          bottom: -1rem;
          left: 0;
        }
      }
    }
  }
`;
