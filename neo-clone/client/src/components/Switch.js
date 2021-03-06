import styled from "styled-components";

const ToggleContainer = styled.div`
  .wrg-toggle {
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .wrg-toggle-input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .wrg-toggle-container {
    width: 50px;
    height: 24px;

    border-radius: 30px;
    background-color: ${(props) => (props.isToggled ? "#00c7b1" : "#EDEEEF")};
    transition: all 0.2s ease;
  }

  .wrg-toggle-circle {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid white;

    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }

  .wrg-toggle--checked .wrg-toggle-check {
    opacity: 1;
  }
  .wrg-toggle--checked .wrg-toggle-uncheck {
    opacity: 0;
  }
  .wrg-toggle--checked .wrg-toggle-circle {
    left: 27px;
  }
`;

function Switch({ state, toggleState }) {
  // const [isToggled, setIsToggled] = useState(false);
  const triggerToggle = () => {
    toggleState((toggle) => !toggle);
  };
  return (
    <ToggleContainer isToggled={state}>
      <div
        onClick={triggerToggle}
        className={`wrg-toggle ${state ? "wrg-toggle--checked" : ""}`}
      >
        <div className="wrg-toggle-container"></div>
        <div className="wrg-toggle-circle"></div>
        <input
          className="wrg-toggle-input"
          type="checkbox"
          aria-label="Toggle Button"
        />
      </div>
    </ToggleContainer>
  );
}

export default Switch;
