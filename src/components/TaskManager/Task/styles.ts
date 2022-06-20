import styled from 'styled-components';

interface ITaskProps {
  isDone: boolean;
}

export const Container = styled.div<ITaskProps>`
  padding: 1rem;
  border: ${props => (props.isDone ? 'none' : '1px solid var(--border)')};
  border-radius: 0.5rem;
  background-color: var(--backgroundInput);
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .taskContent {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;

    border-bottom: 1px solid var(--border);

    span {
      font-size: 0.875rem;
      color: ${props =>
        props.isDone ? 'var(--placeholderText)' : 'var(--text)'};
      text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
      flex: 1;
    }

    button {
      width: 1rem;
      height: 1rem;

      &.checkbox {
        color: ${props => (props.isDone ? 'var(--purple)' : 'var(--blue)')};
      }

      &.trash {
        color: var(--placeholderText);
        transition: color 0.2s;

        &:hover {
          color: var(--danger);
        }
      }
    }
  }

  .taskDate {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.5rem;

    color: var(--placeholderText);

    time,
    small {
      font-size: 0.75rem;

      &::after {
        content: '•';
        margin-inline: 0.3rem;
      }
    }
  }
`;
