import styled from 'styled-components';

interface ITasks {
  toggleCompleteTasks: boolean;
}

export const Container = styled.div<ITasks>`
  max-width: 736px;
  margin: 0 auto 0.5rem;

  .taskInfo {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;

    .createdTasks,
    .completeTasks {
      color: var(--blue);

      span {
        font-size: 0.75rem;
        color: var(--alternativeText);
        padding: 2px 8px;
        border-radius: 9999px;
        background-color: var(--border);
        margin-left: 0.5rem;
      }
    }

    .completeTasks {
      color: var(--purple);
    }
  }

  .emptyTaskContainer {
    padding-block: 4rem;
    border-radius: 0.5rem;
    border-top: 1px solid var(--border);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 1rem;
    }

    strong,
    span {
      color: var(--placeholderText);
    }
  }

  .toggleTasksCompleted {
    display: flex;
    align-items: center;

    margin-block: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--transparent-shape);

    svg {
      transition: transform 0.2s;
      transform: ${props =>
        props.toggleCompleteTasks ? 'rotate(90deg)' : 'rotate(0deg)'};
    }
  }

  .tasksCompleted {
    transition: opacity 0.2s;
    opacity: ${props => (props.toggleCompleteTasks ? '1' : '0')};
  }
`;
