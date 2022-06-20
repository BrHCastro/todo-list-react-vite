import styled from "styled-components";

export const Container = styled.form`
  max-width: 736px;
  margin: -1.5rem auto 4rem;

  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;

    padding: 1rem;
    border-radius: 0.5rem;
    border: none;

    background-color: var(--backgroundInput);
    color: var(--text);

    &::placeholder {
      color: var(--placeholderText);
    }
  }

  button {
    background-color: var(--blue-dark);
    border-radius: 0.5rem;
    padding: 1rem;
    transition: filter 0.2s;

    font-size: 0.875rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      filter: brightness(0.9);

      svg {
        transform: rotate(180deg);
      }
    }

    svg {
      transform: rotate(-180deg);
      transition: transform 0.7s;
    }
  }
`;
